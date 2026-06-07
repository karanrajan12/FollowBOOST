import dns from "dns";

dns.resolveSrv(
    "_mongodb._tcp.cluster0.zbxywmc.mongodb.net",
    (err, addresses) => {
        console.log("ERROR:", err);
        console.log("ADDRESSES:", addresses);
    }
);