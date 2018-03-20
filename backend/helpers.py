from sqlalchemy import inspect


def object_as_dict(obj):
    """creates a dictionary from an SQLAlchemy object"""
    return {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}