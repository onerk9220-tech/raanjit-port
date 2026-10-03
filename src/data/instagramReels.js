const toEmbedUrl = (url) => {
  const match = url.match(/instagram\.com\/reel\/([^/?]+)/);
  return match ? `https://www.instagram.com/reel/${match[1]}/embed/` : url;
};

export const brandPromotionReels = [
  "https://www.instagram.com/reel/Ddvw1qDsOeI/?stkn=NDZsNzZveDljMnls",
  "https://www.instagram.com/reel/DdnznL7Nx89/?stkn=eTd3dmY1a3p4Njd1",
  "https://www.instagram.com/reel/DdLEfwDhrXf/?stkn=d3M0bGR1ZmU5ZGs=",
  "https://www.instagram.com/reel/DdDjBa2B0w6/?stkn=MTk3cDVjdTF3dG53cg==",
  "https://www.instagram.com/reel/DaVkraHBZa1/?stkn=YWxmNGUzOTF0bW54",
  "https://www.instagram.com/reel/DaNxMyxh0AM/?stkn=MW5wZTI1dWlqcTI5dw==",
  "https://www.instagram.com/reel/DaElkr-h_1J/?stkn=MXdwbGJ0cWlxdWgzcA==",
  "https://www.instagram.com/reel/DZpc4LGhw-d/?stkn=cG04bnZqNmZicGZ4",
  "https://www.instagram.com/reel/DYmo3UZhN59/?stkn=Z2l2aXVmajRsbTZx",
].map((url, index) => ({
  id: `brand-promotion-${index + 1}`,
  title: `Brand Promotion ${String(index + 1).padStart(2, "0")}`,
  url,
  embedUrl: toEmbedUrl(url),
}));

export const additionalReels = [
  "https://www.instagram.com/reel/DcuvmozB-iJ/?stkn=MTJyNnR0MXRyaXd6eQ==",
  "https://www.instagram.com/reel/DcRDp1bSy8C/?stkn=MW52eHpxcDBnZXRnaA==",
  "https://www.instagram.com/reel/DauQSVehyb7/?stkn=MWRscGw5bnZzZ3U0Mg==",
].map((url, index) => ({
  id: `videography-reel-${index + 1}`,
  title: `Videography Reel ${String(index + 1).padStart(2, "0")}`,
  url,
  embedUrl: toEmbedUrl(url),
}));
