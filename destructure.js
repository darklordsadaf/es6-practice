/**For single line */
const person = {name: 'Ron', age: '35', address: 'Dhaka', phone: '5551626'};
const {phone} = person;
// console.log(phone);


/**For nested */
const student = {
    id: 17050,
    info: {
        name: 'Sadaf',
        age: 24
    }
}

const {name} = student.info;
// console.log(name);


/**For array */
const friends = ['Ron', 'Ash', 'Jenifer', 'Ryan', 'Razor'];
const [firstFriend, ...restFriends] = friends;
// console.log(firstFriend);
console.log(restFriends);