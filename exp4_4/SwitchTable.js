// 课程表数据
const courseData = {
    "0": [
        { course: "Web技术", classroom: "商学院551", time: "5-6", instructor: "刘猛" },
        { course: "Web技术实验", classroom: "知行南楼408", time: "9-10", instructor: "刘猛" },
        { course: "计算机网络", classroom: "商学院251", time: "1-2", instructor: "赵永健" },
        { course: "VR系统开发及可用性评估", classroom: "商学院351", time: "3-4", instructor: "卞玉龙" },
        { course: "计算机网络", classroom: "商学院351", time: "3-4", instructor: "赵永健" },
        { course: "虚拟现实技术", classroom: "机电院408", time: "5-6", instructor: "郭娜" },
        { course: "Web技术", classroom: "商学院551", time: "7-8", instructor: "刘猛" },
        { course: "形势与政策", classroom: "商学院353", time: "1-2", instructor: "王萧涵" },
        { course: "软件项目管理", classroom: "图东教学楼108", time: "3-4", instructor: "丛小茗" },
        { course: "虚拟现实技术", classroom: "机电院408", time: "7-10", instructor: "郭娜" },
        { course: "中国历史地理概况", classroom: "无", time: "9-10", instructor: "无" },
    ],
    "1": [
        { course: "Web技术", classroom: "商学院551", time: "5-6", instructor: "刘猛" },
        { course: "Web技术实验", classroom: "知行南楼408", time: "9-10", instructor: "刘猛" }
    ],
    "2": [
        { course: "计算机网络", classroom: "商学院251", time: "1-2", instructor: "赵永健" },
        { course: "VR系统开发及可用性评估", classroom: "商学院351", time: "3-4", instructor: "卞玉龙" }
    ],
    "3": [
        { course: "计算机网络", classroom: "商学院351", time: "3-4", instructor: "赵永健" },
        { course: "虚拟现实技术", classroom: "机电院408", time: "5-6", instructor: "郭娜" },
        { course: "Web技术", classroom: "商学院551", time: "7-8", instructor: "刘猛" },
    ],
    "4": [
        { course: "形势与政策", classroom: "商学院353", time: "1-2", instructor: "王萧涵" },
    ],
    "5": [
        { course: "软件项目管理", classroom: "图东教学楼108", time: "3-4", instructor: "丛小茗" },
    ],
    "6": [
        { course: "虚拟现实技术", classroom: "机电院408", time: "7-10", instructor: "郭娜" },
    ],
    "7": [
        { course: "中国历史地理概况", classroom: "无", time: "9-10", instructor: "无" },
    ]
};

const courseTable = document.querySelector(".course-table");

// 生成课程表格
function generateCourseTable(week) {
    const table = document.createElement('table');

    // 表头
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const courseHeader = document.createElement('th');
    courseHeader.classList.add('course');
    courseHeader.textContent = '课程名';

    const classroomHeader = document.createElement('th');
    classroomHeader.textContent = '教室';

    const timeHeader = document.createElement('th');
    timeHeader.textContent = '节次';

    const instructorHeader = document.createElement('th');
    instructorHeader.classList.add('instructor');
    instructorHeader.textContent = '教师';

    headerRow.appendChild(courseHeader);
    headerRow.appendChild(classroomHeader);
    headerRow.appendChild(timeHeader);
    headerRow.appendChild(instructorHeader);

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // 课程数据
    const tbody = document.createElement('tbody');

    const courses = courseData[week] || [];

    courses.forEach(course => {
        const row = document.createElement('tr');

        const courseCell = document.createElement('td');
        courseCell.textContent = course.course;

        const classroomCell = document.createElement('td');
        classroomCell.textContent = course.classroom;

        const timeCell = document.createElement('td');
        timeCell.textContent = course.time;

        const instructorCell = document.createElement('td');
        instructorCell.textContent = course.instructor;

        row.appendChild(courseCell);
        row.appendChild(classroomCell);
        row.appendChild(timeCell);
        row.appendChild(instructorCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // 清空原有内容并添加新表格
    courseTable.innerHTML = '';
    courseTable.appendChild(table);
}

// 初始化加载课程表（全周的课程）
generateCourseTable(0);