document.getElementById('searchButton').addEventListener('click', performSearch);

document.getElementById('userInput').addEventListener('keyup', function(event) {
    // Check if the Enter key is pressed
    if (event.key === 'Enter') {
        // Call performSearch function
        performSearch();
    }
});

async function performSearch() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput === '') {
        alert('Please enter some text to search');
        return;
    }

    try {
        const queries = [
            `${userInput} leetcode practice`,
            `${userInput} geeksforgeeks practice`,
            `${userInput} coding ninjas practice`
        ];

        queries.forEach(query => {
            const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(url, '_blank');
        });
    } catch (error) {
        console.error('Error performing search:', error);
        alert('Failed to fetch search results');
    }
}
