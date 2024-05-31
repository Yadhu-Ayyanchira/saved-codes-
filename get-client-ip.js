var client_ip;
if (
  req.headers["cf-connecting-ip"] &&
  req.headers["cf-connecting-ip"].split(", ").length
) {
  var first = req.headers["cf-connecting-ip"].split(", ");
  client_ip = first[0];
} else {
  client_ip =
    req.headers["x-forwarded-for"] ||
    req.headers["x-real-ip"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
}

const ip = client_ip;
console.log("ip===", ip);
