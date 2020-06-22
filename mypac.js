function FindProxyForURL(url, host) {
 
// If the hostname matches, send direct.
    if (
	dnsDomainIs(host, "twitter.com") 
	|| shExpMatch(host, "(*.google.com|google.com)")
	|| shExpMatch(host, "(*.facebook.com|facebook.com)")
	) return "SOCKS5 127.0.0.1:1080";
		
    return "DIRECT";
}