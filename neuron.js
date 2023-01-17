function neuron(arr) {
    var res = {};
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].split(' ');
        if (/questions:/i.test(str[0])) {
            res['questions'] ||= {};
            let [question, response] = parseQuestionOrder(str);
            let questionKey = question
                .replaceAll(' ', '_')
                .replace('?', '')
                .toLowerCase();
            res['questions'][questionKey] ||= {};
            res['questions'][questionKey]['question'] = question;
            res['questions'][questionKey]['responses'] ||= [];
            res['questions'][questionKey]['responses'].push(response);
        } else if (/orders:/i.test(str[0])) {
            let [order, response] = parseQuestionOrder(str);
            res['orders'] ||= {};
            let orderKey = order
                .replaceAll(' ', '_')
                .replace('!', '')
                .toLowerCase();
            res['orders'][orderKey] ||= {};
            res['orders'][orderKey]['order'] = order;
            res['orders'][orderKey]['responses'] ||= [];
            res['orders'][orderKey]['responses'].push(response);
        } else if (/affirmations:/i.test(str[0])) {
            let [affirmation, response] = parseAffirmations(str);
            res['affirmations'] ||= {};
            let affirmationKey = affirmation.replaceAll(' ', '_').toLowerCase();
            res['affirmations'][affirmationKey] ||= {};
            res['affirmations'][affirmationKey]['affirmation'] = affirmation;
            res['affirmations'][affirmationKey]['responses'] ||= [];
            res['affirmations'][affirmationKey]['responses'].push(response);
        }
    }
    return res;
}

function parseQuestionOrder(arr) {
    let statement = arr.slice(1).join(' ').split('-')[0].slice(0, -1);
    let response = arr
        .join(' ')
        .split('-')
        .slice(1)
        .join('-')
        .slice(1)
        .split(' ')
        .slice(1)
        .join(' ');
    return [statement, response];
}

function parseAffirmations(arr) {
    let statement = arr.slice(1).join(' ').split('-')[0].slice(0, -1);
    let response = arr
        .join(' ')
        .split('-')[1]
        .slice(1)
        .split(' ')
        .slice(1)
        .join(' ');
    return [statement, response];
}
