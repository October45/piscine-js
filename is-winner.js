async function isWinner(country) {
    try {
        country = await db.getWinner(country);
        if (country === Error('Country Not Found')) {
            return `${country.name} never was a winner`;
        }
        if (country.continent !== 'Europe') {
            return `${country.name} is not what we are looking for because of the continent`;
        }
        let results = await db.getResults(country.id);
        if (results === Error('Results Not Found')) {
            return `${country.name} never was a winner`;
        }
        if (results.length < 3) {
            return `${country.name} is not what we are looking for because of the number of times it was champion`;
        }
        return (
            `${country.name} won the FIFA World Cup in ` +
            results.map((result) => result.year).join(', ') +
            ' winning by ' +
            results.map((result) => result.score).join(', ')
        );
    } catch (e) {
        if (e.message === 'Country Not Found') {
            return `${country} never was a winner`;
        }
    }
}
