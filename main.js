
let $login = 'admin';
let $login_false = typeof $login;
let $not_object_notif = 'Login have not be object or null';
let $not_number_notif = 'Login have not be number';
let $not_string_notif = 'Login have include letters';
let $input_notif = 'Please input login';
let $more_symbol = 'Please use more than 3 symbols in your login';


if ($login_false == 'undefined') {
    console.log ($input_notif);
}
else if ($login_false == 'number'){
    console.log ($not_number_notif);
}
else if ($login_false == 'object'){
    console.log ($not_object_notif);
}
else if ($login_false != 'string'){
    console.log ($not_string_notif);
}
else if ($login < 'aaa'){
    console.log ($more_symbol);
}
else {
    console.log('Your login is ' + $login);
    }


/*Array*/
let typeof_arr = [ {string:'Петя'}, {number:2}, {boolean:true}, {object:'object'}, {NaN:'NaN'}, {undefined:'undefined'}, {infinity:'infinity'}, {infinity:'null'}];
console.log(typeof_arr[4]);
