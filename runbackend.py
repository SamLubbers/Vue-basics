#!/usr/bin/env python3
from backend import create_app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=8090)
