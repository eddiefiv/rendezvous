from dataclasses import dataclass, asdict

from collections.abc import Iterable

import datetime

@dataclass
class Post:
    post_id: int
    author: str
    title: str
    location: str
    creation_date: datetime.datetime
    flare: str
    description: str
    like_count: int
    comments: Iterable[int]

    def dict(self):
        return {k: str(v) for k, v in asdict(self).items()}

@dataclass
class Charity:
    charity_id: int
    author: str
    title: str
    location: str
    creation_date: datetime.datetime
    charity_type: str
    charity_deadline: str
    deposit_address: str
    donation_goal: int
    donation_current: int
    description: str
    like_count: int
    comments: Iterable[int]

    def dict(self):
        return {k: str(v) for k, v in asdict(self).items()}