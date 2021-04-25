const SelfCare = (selfCareChoice) => {
    const selfCareActivities = {
        'meditate': [
            ['5-Minute Meditation You Can Do Anywhere'],
            ['https://www.youtube.com/watch?v=inpok4MKVLM'], 
            ['https://i.ytimg.com/vi/inpok4MKVLM/maxresdefault.jpg']
        ],
        'journaling': [
            ['30 Journal Prompts to Start Your Day Feeling Inspired'],
            ['https://camillestyles.com/wellness/30-journal-prompts-to-start-your-day-feeling-inspired/'], 
            ['https://i.ytimg.com/vi/jqlYqkFv9-o/maxresdefault.jpg']
        ],
        'drawing': [
            ['Get started with easy drawings.'],
            ['https://www.adobe.com/creativecloud/illustration/discover/easy-things-to-draw.html'], 
            ['https://cc-prod.scene7.com/is/image/CCProdAuthor/Easy-things-to-draw_P4_720x424?$pjpeg$&jpegSize=200&wid=720']
        ],
        'nap': [
            ['Take a 30 minute nap'],
            ['https://www.youtube.com/watch?v=jg2glpJOgMU'], 
            ['https://i.dailymail.co.uk/i/pix/2017/10/20/15/458576D100000578-5001190-image-a-57_1508509623797.jpg']
        ],
        'cat video': [
            ['Watch a 5 minute Cat Video'],
            ['https://www.youtube.com/watch?v=ByH9LuSILxU'], 
            ['https://nenow.in/wp-content/uploads/2020/04/cat-image-2.jpg']
        ],
        'meme': [
            ['Read Some Memes'],
            ['https://www.testbytes.net/blog/programming-memes/'], 
            ['https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-63.png']
        ]  
    };

    return (selfCareActivities[selfCareChoice]);    
};

export default SelfCare;