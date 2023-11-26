const fillcut = (str, len) =>  {
    if (str.length > len)
{
    return str.slice (0,len);
}
else if (str.length < len ) {
    return str.padStart (len, '.');
}else {
    return str;
}};
const str = (prompt("Zadejte slovo pro výplňořez:"));
const len = parseFloat(prompt("Zadejte počet výsledných znaků:"));


document.body.innerHTML +=`
<p>Výslek pro slovo: ${str} doplněné / oříznuté na počet znaků: ${len} je: </p> `;
document.body.innerHTML += fillcut(str, len) + '<br>';