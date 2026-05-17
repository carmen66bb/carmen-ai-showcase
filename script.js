// 拦截待补链接点击
document.querySelectorAll('a[data-pending="true"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    alert('该案例文档链接会在演讲前补充完成。\n（Carmen 会把脱敏后的腾讯文档链接贴进来）');
  });
});

// 章节高亮（可选小细节）
const sections = document.querySelectorAll('.module[id]');
const navLinks = document.querySelectorAll('.toc a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.background = a.getAttribute('href') === '#' + current ? 'var(--ink)' : '';
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--bg)' : '';
  });
});
