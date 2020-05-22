var template = Handlebars.templates['img'];
var data = {
    img: [{
            block: [{
                    url: './images/img-1.jpg'
                },
                {
                    url: './images/img-2.jpg'
                },
                {
                    url: './images/img-3.jpg'
                }
            ]
        },
        {
            block: [{
                    url: './images/img-4.jpg'
                },
                {
                    url: './images/img-5.jpg'
                },
                {
                    url: './images/img-6.jpg'
                }
            ]
        }
    ]
};
document.getElementById('images').innerHTML += template(data);