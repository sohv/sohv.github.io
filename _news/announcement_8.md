---
layout: post
date: 2026-06-11 00:00:00-0400
inline: true
related_posts: false
---

2 solo-authored papers accepted at the Mechanistic Interpretability Workshop, ICML 2026! See the posters for the <a href="#" onclick="openAnnouncementPdfModal('{{ '/assets/pdf/poster2.pdf' | relative_url }}', 'Poster: Architecture, Not Scale: Circuit Localization in Large Language Models'); return false;" style="color: var(--global-theme-color); text-decoration: underline;">first</a> and <a href="#" onclick="openAnnouncementPdfModal('{{ '/assets/pdf/poster3.pdf' | relative_url }}', 'Poster: Negative Before Positive: Asymmetric Valence Processing in Large Language Models'); return false;" style="color: var(--global-theme-color); text-decoration: underline;">second</a> papers.

<div id="announcementPdfModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 1000; align-items: center; justify-content: center;">
	<div style="background: white; padding: 1rem; border-radius: 8px; max-width: 900px; width: 92%; height: 90vh; position: relative; display: flex; flex-direction: column; gap: 0.75rem; box-sizing: border-box; overflow: hidden;">
		<button onclick="closeAnnouncementPdfModal()" style="position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 28px; cursor: pointer; color: var(--global-text-color);">&times;</button>
		<p id="announcementPdfTitle" style="margin: 0 2rem 0 0; font-weight: bold; color: var(--global-text-color);"></p>
		<div style="flex: 1; min-height: 0; overflow: hidden;">
			<iframe id="announcementPdfFrame" style="width: 100%; height: 100%; border: none; border-radius: 4px; display: block;" src=""></iframe>
		</div>
	</div>
</div>

<script>
function openAnnouncementPdfModal(pdfUrl, title) {
	document.getElementById('announcementPdfFrame').src = pdfUrl;
	document.getElementById('announcementPdfTitle').textContent = title;
	document.getElementById('announcementPdfModal').style.display = 'flex';
	document.body.style.overflow = 'hidden';
}

function closeAnnouncementPdfModal() {
	document.getElementById('announcementPdfFrame').src = '';
	document.getElementById('announcementPdfModal').style.display = 'none';
	document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape') closeAnnouncementPdfModal();
});

document.getElementById('announcementPdfModal').addEventListener('click', function(e) {
	if (e.target === this) closeAnnouncementPdfModal();
});
</script>