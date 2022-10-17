window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    const name = params.get('user_name');

    document.getElementById('output').innerHTML = name;
})