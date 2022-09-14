var student1 = {
    firstName: 'Juan',
    lastName: 'Gonzalez',
    age: 31,
    location: 'Cali'
}, student2 = {
    firstName: 'Aura',
    lastName: 'Caicedo',
    age: 31,
    location: 'Cali'
};
var studentsList = [student1, student2];
var $table = document.createElement('table');
var $tbody = document.createElement('tbody');
var $thead = document.createElement('thead');
$table.appendChild($thead);
$table.appendChild($tbody);
var titles = ['firstName', 'location'];
var $th = document.createElement('th');
titles.forEach(function (title) {
    var $td = document.createElement('td');
    var $text = document.createTextNode(title);
    $td.appendChild($text);
    $th.appendChild($td);
});
$thead.appendChild($th);
studentsList.forEach(function (student) {
    var $tr = $tbody.insertRow();
    for (var _i = 0, _a = Object.entries(student); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (key === 'firstName' || key === 'location') {
            var $td = $tr.insertCell();
            var $text = document.createTextNode(value);
            $td.appendChild($text);
        }
    }
});
document.body.append($table);
