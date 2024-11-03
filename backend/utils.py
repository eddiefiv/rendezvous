from psycopg import Connection, Cursor, connect, rows

from models import Post, Charity

class PSQLManager:
    conn: Connection = None
    cur: Cursor = None

    def connect_psql(self, user: str, password: str, dbname: str) -> None:
        try:
            self.conn = connect(user = user, password = password, dbname = dbname, autocommit = True)
            self.cur = self.conn.cursor(row_factory = rows.dict_row)
        except Exception as e:
            print(str(e))

    def get_posts(self, limit: int) -> list[Post]:
        try:
            _res = self.cur.execute("SELECT * FROM posts ORDER BY post_id DESC LIMIT %s", (limit,))
            _fetched = _res.fetchall()

            print(_fetched)
            return [Post(**row) for row in _fetched]
        except Exception as e:
            print(str(e))

    def get_charity(self, charity_id: int):
        try:
            _res = self.cur.execute("SELECT * FROM charities WHERE charity_id=%s", (charity_id,))
            _fetched = _res.fetchone()

            print(_fetched)
            return Charity(**_fetched)
        except Exception as e:
            print(str(e))

    def get_charities(self, limit: int) -> list[Post]:
        try:
            _res = self.cur.execute("SELECT * FROM charities ORDER BY charity_id DESC LIMIT %s", (limit,))
            _fetched = _res.fetchall()

            print(_fetched)
            return [Charity(**row) for row in _fetched]
        except Exception as e:
            print(str(e))

    def make_post(self, title: str, description: str, author: str, flare: str) -> Post:
        try:
            _res = self.cur.execute("INSERT INTO posts (author, title, location, creation_date, flare, description, like_count) VALUES (%s, %s, %s, NOW(), %s, %s, %s) RETURNING *", (author, title, "Chapel Hill", flare, description, 0)).fetchone()

            print(_res)
            return Post(**_res)
        except Exception as e:
            print(str(e))