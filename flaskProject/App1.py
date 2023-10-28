from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def show():
    return render_template('index.html')


# 静态表单页面收集数字，模板页面显示乘法表
@app.route('/show1', methods=['POST'])
def show1():
    if request.method == 'POST':
        number = int(request.form['number'])
        result = generate_multiplication_table(number)

    return render_template('show1.html', result=result)


@app.route('/show2', methods=['GET', 'POST'])
def show2():
    if request and request.method == 'POST':
        number = int(request.form['number'])
        result = generate_multiplication_table(number)
        return render_template('show2.html', result=result)
    else:
        return render_template('show2.html')


# 生成乘法表
def generate_multiplication_table(number):
    table = []
    for i in range(1, 11):
        multiplication = f'{number} x {i}'
        result = number * i
        row = [multiplication, '=', result]
        table.append(row)
    return table


if __name__ == '__main__':
    app.run(debug=True)
