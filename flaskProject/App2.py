from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

# 数据库配置
DATABASE = 'courses.db'


# 获取数据库连接
def get_db():
    conn = sqlite3.connect("courses.db")
    return conn


@app.route('/', methods=['GET', 'POST'])
def show():
    if request.method == 'POST':
        date = request.form['button']
        course = query_courses_by_weekday(int(date))
        return render_template('Course.html', courses=course, date=get_weekday_name(int(date)))
    else:
        return render_template('Course.html')


# 创建查询周几课程的函数
def query_courses_by_weekday(weekday):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM courses WHERE week_day = ?', (weekday,))
    courses = cursor.fetchall()
    cursor.close()
    return courses


def get_weekday_name(date):
    if date == 0:
        return "全周课程表"
    elif date == 1:
        return "周一课程表"
    elif date == 2:
        return "周二课程表"
    elif date == 3:
        return "周三课程表"
    elif date == 4:
        return "周四课程表"
    elif date == 5:
        return "周五课程表"
    elif date == 6:
        return "周六课程表"
    elif date == 7:
        return "周日课程表"
    else:
        return "无效日期"


if __name__ == '__main__':
    app.run(debug=True)
