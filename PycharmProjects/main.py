import sqlite3

# 连接数据库（如果不存在则会创建）
conn = sqlite3.connect('courses.db')
cursor = conn.cursor()

# 创建课程表
cursor.execute('''CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY,
    course_name TEXT,
    classroom TEXT,
    week_day INTEGER,
    start_time TEXT,
    end_time TEXT,
    instructor TEXT
)''')

# 创建一个课程信息插入函数
def insert_course(course_name, classroom, week_day, start_time, end_time, instructor):
    cursor.execute('''
        INSERT INTO courses (course_name, classroom, week_day, start_time, end_time, instructor) 
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (course_name, classroom, week_day, start_time, end_time, instructor))
    conn.commit()

# # 插入数据
# insert_course("Web技术", "商学院551", 1, "5", "6", "刘猛")
# insert_course("Web技术实验", "知行南楼408", 1, "9", "10", "刘猛")
#
# insert_course("计算机网络", "商学院251", 2, "1", "2", "赵永健")
# insert_course("VR系统开发及可用性评估", "商学院351", 2, "3", "4", "卞玉龙")
#
# insert_course("计算机网络", "商学院351", 3, "3", "4", "赵永健")
# insert_course("虚拟现实技术", "机电院408", 3, "5", "6", "郭娜")
# insert_course("Web技术", "商学院551", 3, "7", "8", "刘猛")
#
# insert_course("形势与政策", "商学院353", 4, "1", "2", "王萧涵")
#
# insert_course("软件项目管理", "图东教学楼108", 5, "3", "4", "丛小茗")
#
# insert_course("虚拟现实技术", "机电院408", 6, "7", "10", "郭娜")
#
# insert_course("中国历史地理概况", "无", 7, "9", "10", "无")


# 创建查询周几课程的函数
def query_courses_by_weekday(weekday):
    cursor.execute('SELECT * FROM courses WHERE week_day = ?', (weekday,))
    courses = cursor.fetchall()
    return courses

# 查询并打印周一的课程
print("课程名  地点  星期几  节次  任课老师")
monday_courses = query_courses_by_weekday(1)
for course in monday_courses:
    print(course)

# 提交更改并关闭连接
conn.commit()
conn.close()
