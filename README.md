# html-tablify

### This package is used to convert json data to html. For e.g. -

* Basic usage -
```
var options = {
    data: [{a: 1, b: 2}, {b: 1, a: 2}]
};
```
* Output (pretty) -
```
<table border=1 cellspacing=0 cellpadding=0>
    <thead>
        <tr>
            <th>a</th> <th>b</th>
        </tr>
    </thead>
    </tbody>
        <tr>
            <td>1</td> <td>2</td>
        </tr>
        <tr>
            <td>2</td> <td>1</td>
        </tr>
    </tbody>
</table>
```