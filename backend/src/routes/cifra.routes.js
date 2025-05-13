import Router from 'express'
import axios from 'axios'
import * as cheerio from 'cheerio';

async function scrapeCifra(artist, song) {
    try {
        artist = artist
            .replaceAll(/[^a-zA-Z0-9áéíóúÁÉÍÓÚçÇ ]/g, "")
            .trim()
            .replaceAll(" ", "-")
            .toLowerCase()
        song = song
            .replaceAll(/[^a-zA-Z0-9áéíóúÁÉÍÓÚçÇ ]/g, "")
            .trim()
            .replaceAll(" ", "-")
            .toLowerCase()

        console.log(song)

        const url = `https://www.cifraclub.com.br/${artist}/${song}/`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const cifra = [];

        $('.cifra-mono b').each((_, element) => {
            cifra.push($(element).text().trim());
        });

        console.log('cifra encontrada:');
        console.log(cifra.join(' | '));
    } catch (error) {
        console.error('Erro ao buscar a página:', error.message);
    }
}

scrapeCifra('Nirvana', ' all APologies');

