let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    bornInfo: {
        city: 'RJ',
        state: 'RJ'
    }
}       

singer ['fullName'] = singer.name + ' ' + singer.lastName;

console.table(singer);