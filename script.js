document.addEventListener("alpine:init", () => {
  Alpine.store("lists", {
    html,
    css,
    js,
  });
});

const html = [
  { href: "html/html-1.html", label: "html-1" },
  { href: "html/html-2.html", label: "html-2" },
].sort((a, b) => a.label.localeCompare(b.label));

const css = [
  { href: "css/css-marquee.html", label: "css-marquee" },
  { href: "css/robot-animation.html", label: "robot-animation" },
  { href: "css/simple-tips.html", label: "simple-tips" },
].sort((a, b) => a.label.localeCompare(b.label));

const js = [
  { href: "js/vue-jon.html", label: "vue-jon" },
  { href: "js/vue-traversy.html", label: "vue-traversy" },
  { href: "js/alpine-wpu.html", label: "alpine-wpu" },
].sort((a, b) => a.label.localeCompare(b.label));
