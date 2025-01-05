// remove-ad.js

var body = $response.body;
var url = $request.url;

// 检查广告域名并进行处理
if (url.includes("ad.xmmnsd.com")) {
  body = body.replace(/<img[^>]*src="https:\/\/ad\.xmmnsd\.com\/uploads\/images\/[^"]*"[^>]*>/g, '');
  body = body.replace(/<a[^>]*href="https:\/\/ad\.xmmnsd\.com[^"]*"[^>]*>/g, '');
} else if (url.includes("dzlndygh.com")) {
  body = body.replace(/<img[^>]*src="https:\/\/69vvnstttaaa888\.dzlndygh\.com\/i\/[^"]*"[^>]*>/g, '');
} else if (url.includes("getehu.com")) {
  body = body.replace(/<img[^>]*src="https:\/\/hongniu\.getehu\.com\/i\/[^"]*"[^>]*>/g, '');
} else if (url.includes("xmmnsl.com")) {
  body = body.replace(/<img[^>]*src="https:\/\/ad\.xmmnsl\.com\/uploads\/images\/[^"]*"[^>]*>/g, '');
}

$done({body: body});
