const adDomains = [
    'https://ad.xmmnsd.com/uploads/images/',
    'https://69vvnstttaaa888.dzlndygh.com/i/',
    'https://hongniu.getehu.com/i/',
    'https://ad.xmmnsl.com/uploads/images/'
];

const removeElements = () => {
    const imgs = $response.body.match(/<img[^>]*src=["']([^"']+)["']/g);
    if (imgs) {
        imgs.forEach(img => {
            adDomains.forEach(domain => {
                if (img.includes(domain)) {
                    $response.body = $response.body.replace(img, '');
                }
            });
        });
    }
    return $response.body;
};

removeElements();
