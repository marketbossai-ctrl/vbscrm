export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname === '/' ? '/index.html' : url.pathname;
    const html = FILES[path];
    if (html) {
      return new Response(html, {
        headers: { 'content-type': 'text/html;charset=UTF-8' }
      });
    }
    return new Response('Not found', { status: 404 });
  }
};

const FILES = {};
FILES['/index.html'] = `1|<!DOCTYPE html>
2|<html lang="en">
3|<head>
4|<meta charset="UTF-8">
5|<meta name="viewport" content="width=device-width, initial-scale=1.0">
6|<title>VBSpotlight CRM</title>
7|<style>
8|:root { --bg: #0f0f0f; --card: #1a1a1a; --text: #e0e0e0; --muted: #888; --accent: #7c3aed; --accent2: #a78bfa; --green: #22c55e; --yellow: #eab308; --red: #ef4444; --blue: #3b82f6; --orange: #f97316; --purple: #a855f7; --pink: #ec4899; --teal: #14b8a6; --gray: #6b7280; }
9|* { box-sizing: border-box; margin: 0; padding: 0; }
10|body { font-family: system-ui, -apple-system, sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; padding: 16px; }
11|.container { max-width: 800px; margin: 0 auto; }
12|h1 { font-size: 1.5rem; margin-bottom: 6px; }
13|.muted { color: var(--muted); font-size: 0.85rem; margin-bottom: 20px; }
14|.card { background: var(--card); border-radius: 10px; padding: 18px; margin-bottom: 12px; border-left: 4px solid var(--accent); }
15|.card h3 { font-size: 1rem; margin-bottom: 4px; }
16|.card h3 a { color: var(--accent2); text-decoration: none; }
17|.card h3 a:hover { text-decoration: underline; }
18|.card .meta { font-size: 0.8rem; color: var(--muted); }
19|.stage-label { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; padding: 3px 8px; border-radius: 4px; display: inline-block; margin-bottom: 8px; }
20|.stage-reviewed { background: rgba(249,115,22,0.15); color: var(--orange); }
21|.stage-scheduled { background: rgba(168,85,247,0.15); color: var(--purple); }
22|.stage-completed { background: rgba(59,130,246,0.15); color: var(--blue); }
23|.stage-published { background: rgba(34,197,94,0.15); color: var(--green); }
24|.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 8px; margin-bottom: 20px; }
25|.stat { background: var(--card); border-radius: 8px; padding: 12px; text-align: center; }
26|.stat .num { font-size: 1.4rem; font-weight: 700; }
27|.stat .label { font-size: 0.7rem; color: var(--muted); margin-top: 2px; }
28|.detail-page { max-width: 700px; margin: 0 auto; }
29|.detail-page h1 { font-size: 1.5rem; }
30|.section { background: var(--card); border-radius: 10px; padding: 18px; margin-bottom: 14px; }
31|.section h2 { font-size: 1rem; margin-bottom: 10px; color: var(--accent2); }
32|.section ul { list-style: none; }
33|.section ul li { padding: 4px 0; font-size: 0.9rem; display: flex; align-items: center; gap: 6px; }
34|.check { color: var(--green); }
35|.uncheck { color: var(--muted); }
36|table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
37|td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
38|td:first-child { color: var(--muted); font-weight: 500; white-space: nowrap; }
39|.back-link { display: inline-block; color: var(--muted); text-decoration: none; font-size: 0.85rem; margin-bottom: 16px; }
40|.back-link:hover { color: var(--text); }
41|.pipeline-bar { display: flex; gap: 4px; margin: 8px 0 12px; flex-wrap: wrap; }
42|.pipeline-step { padding: 4px 10px; border-radius: 12px; font-size: 0.7rem; font-weight: 500; background: rgba(255,255,255,0.05); color: var(--muted); }
43|.pipeline-step.done { background: rgba(34,197,94,0.15); color: var(--green); }
44|.badge { font-size: 0.7rem; padding: 3px 8px; border-radius: 4px; font-weight: 600; }
45|.updated { font-size: 0.75rem; color: var(--muted); margin-top: 30px; text-align: center; }
46|</style>
47|</head>
48|<body>
49|<div class="container">
50|  <h1>🔦 VBSpotlight CRM</h1>
51|  <p class="muted">Pipeline overview — last updated August 23, 2026</p>
52|
53|  <div class="stats">
54|    <div class="stat"><div class="num">0</div><div class="label">🔵 Contacted</div></div>
55|    <div class="stat"><div class="num">0</div><div class="label">🟡 Applied</div></div>
56|    <div class="stat"><div class="num">2</div><div class="label">🟠 Reviewed</div></div>
57|    <div class="stat"><div class="num">1</div><div class="label">🟣 Scheduled</div></div>
58|    <div class="stat"><div class="num">0</div><div class="label">🔴 Completed</div></div>
59|    <div class="stat"><div class="num">0</div><div class="label">🟢 Published</div></div>
60|    <div class="stat"><div class="num">0</div><div class="label">⭐ Won</div></div>
61|  </div>
62|
63|  <h2 style="font-size:0.9rem;color:var(--purple);margin-bottom:10px;">🟣 Interview Scheduled (1)</h2>
64|  <div class="card" style="border-left-color:var(--purple);">
65|    <h3><a href="oceanview-hvac.html">Ocean View HVAC</a></h3>
66|    <div class="meta">Earl, Owner • Norfolk, VA • Thu Aug 28, 2pm • (757) 377-2042</div>
67|  </div>
68|
69|  <h2 style="font-size:0.9rem;color:var(--orange);margin:20px 0 10px;">🟠 Reviewed (2)</h2>
70|  <div class="card" style="border-left-color:var(--orange);">
71|    <h3><a href="ribcity.html">Rib City</a></h3>
72|    <div class="meta">Franchise BBQ • Virginia Beach, VA • (757) 961-3690</div>
73|  </div>
74|  <div class="card" style="border-left-color:var(--accent);">
75|    <h3><a href="marketbossai.html">Market Boss AI</a></h3>
76|    <div class="meta">Jeff Wilson, Founder • Virginia Beach, VA • Article draft ready</div>
77|  </div>
78|
79|  <h2 style="font-size:0.9rem;color:var(--muted);margin:20px 0 10px;">This Week</h2>
80|  <div class="card" style="border-left-color:var(--green);">
81|    <ul class="section" style="list-style:none;padding:0;background:none;">
82|      <li style="color:var(--green);">✅ Schedule Ocean View HVAC (Earl) → Thu Aug 28, 2pm</li>
83|      <li style="color:var(--muted);">⬜ Schedule Rib City VB (find franchisee name first)</li>
84|      <li style="color:var(--muted);">⬜ Follow up on outstanding applications</li>
85|    </ul>
86|  </div>
87|
88|  <p class="updated">Powered by Hermes Agent • VBSpotlight.com</p>
89|</div>
90|</body>
91|</html>`;
FILES['/oceanview-hvac.html'] = `1|<!DOCTYPE html>
2|<html lang="en">
3|<head>
4|<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
5|<title>Ocean View HVAC — VBSpotlight CRM</title>
6|<style>
7|:root { --bg: #0f0f0f; --card: #1a1a1a; --text: #e0e0e0; --muted: #888; --accent: #7c3aed; --accent2: #a78bfa; --green: #22c55e; --purple: #a855f7; --orange: #f97316; }
8|* { box-sizing: border-box; margin: 0; padding: 0; }
9|body { font-family: system-ui, sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; padding: 16px; }
10|.detail-page { max-width: 700px; margin: 0 auto; }
11|h1 { font-size: 1.5rem; }
12|.back-link { display: inline-block; color: var(--muted); text-decoration: none; font-size: 0.85rem; margin-bottom: 16px; }
13|.back-link:hover { color: var(--text); }
14|.stage-label { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; padding: 3px 8px; border-radius: 4px; display: inline-block; margin-bottom: 12px; background: rgba(168,85,247,0.15); color: var(--purple); }
15|.section { background: var(--card); border-radius: 10px; padding: 18px; margin-bottom: 14px; }
16|.section h2 { font-size: 1rem; margin-bottom: 10px; color: var(--accent2); }
17|.section ul { list-style: none; }
18|.section ul li { padding: 4px 0; font-size: 0.9rem; display: flex; align-items: center; gap: 6px; }
19|.check { color: var(--green); }
20|.uncheck { color: var(--muted); }
21|table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
22|td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
23|td:first-child { color: var(--muted); font-weight: 500; white-space: nowrap; }
24|.note { background: rgba(124,58,237,0.08); border-radius: 6px; padding: 10px 14px; font-size: 0.85rem; margin-top: 8px; border-left: 3px solid var(--accent); }
25|.updated { font-size: 0.75rem; color: var(--muted); margin-top: 30px; text-align: center; }
26|</style>
27|</head>
28|<body>
29|<div class="detail-page">
30|  <a href="index.html" class="back-link">← Back to CRM</a>
31|  <h1>Ocean View HVAC</h1>
32|  <div class="stage-label">🟣 Interview Scheduled</div>
33|
34|  <div class="section">
35|    <h2>Pipeline</h2>
36|    <ul>
37|      <li><span class="check">✅</span> Contacted</li>
38|      <li><span class="uncheck">⬜</span> Applied</li>
39|      <li><span class="check">✅</span> Reviewed</li>
40|      <li><span class="check">✅</span> Interview Scheduled</li>
41|      <li><span class="uncheck">⬜</span> Interview Completed</li>
42|      <li><span class="uncheck">⬜</span> Article Draft</li>
43|      <li><span class="uncheck">⬜</span> Published</li>
44|      <li><span class="uncheck">⬜</span> Second Call</li>
45|      <li><span class="uncheck">⬜</span> Pitched (MBA)</li>
46|      <li><span class="uncheck">⬜</span> Won / Cold</li>
47|    </ul>
48|  </div>
49|
50|  <div class="section">
51|    <h2>Quick Facts</h2>
52|    <table>
53|      <tr><td>Owner</td><td>Earl</td></tr>
54|      <tr><td>Phone</td><td>(757) 377-2042</td></tr>
55|      <tr><td>Email</td><td>service@oceanviewhvac.com</td></tr>
56|      <tr><td>Website</td><td>oceanviewhvac.com</td></tr>
57|      <tr><td>Location</td><td>Norfolk, VA (Ocean View area)</td></tr>
58|      <tr><td>Hours</td><td>24/7 phone support</td></tr>
59|      <tr><td>Services</td><td>HVAC, geothermal, plumbing, water heaters</td></tr>
60|    </table>
61|  </div>
62|
63|  <div class="section">
64|    <h2>Interview</h2>
65|    <table>
66|      <tr><td>Scheduled</td><td>Thursday, August 28 at 2:00 PM</td></tr>
67|      <tr><td>Questions</td><td>8 prepared (Earl's story, geothermal, competitors, community)</td></tr>
68|    </table>
69|    <div class="note">Earl was enthusiastic. His son might join the call. Send Zoom invite.</div>
70|  </div>
71|
72|  <div class="section">
73|    <h2>Market Boss AI Opportunity</h2>
74|    <table>
75|      <tr><td>Tier</td><td>Growth ($1,750 setup / $875/mo)</td></tr>
76|      <tr><td>Pitch</td><td>"You're the best HVAC tech in Ocean View — but do people find you or Michael & Son at 2 AM?"</td></tr>
77|    </table>
78|  </div>
79|
80|  <p class="updated">Full research brief: oceanview_hvac_research.md • VBSpotlight CRM</p>
81|</div>
82|</body>
83|</html>`;
FILES['/ribcity.html'] = `1|<!DOCTYPE html>
2|<html lang="en">
3|<head>
4|<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
5|<title>Rib City — VBSpotlight CRM</title>
6|<style>
7|:root { --bg: #0f0f0f; --card: #1a1a1a; --text: #e0e0e0; --muted: #888; --accent: #7c3aed; --accent2: #a78bfa; --green: #22c55e; --orange: #f97316; }
8|* { box-sizing: border-box; margin: 0; padding: 0; }
9|body { font-family: system-ui, sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; padding: 16px; }
10|.detail-page { max-width: 700px; margin: 0 auto; }
11|h1 { font-size: 1.5rem; }
12|.back-link { display: inline-block; color: var(--muted); text-decoration: none; font-size: 0.85rem; margin-bottom: 16px; }
13|.back-link:hover { color: var(--text); }
14|.stage-label { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; padding: 3px 8px; border-radius: 4px; display: inline-block; margin-bottom: 12px; background: rgba(249,115,22,0.15); color: var(--orange); }
15|.section { background: var(--card); border-radius: 10px; padding: 18px; margin-bottom: 14px; }
16|.section h2 { font-size: 1rem; margin-bottom: 10px; color: var(--accent2); }
17|.section ul { list-style: none; }
18|.section ul li { padding: 4px 0; font-size: 0.9rem; display: flex; align-items: center; gap: 6px; }
19|.check { color: var(--green); }
20|.uncheck { color: var(--muted); }
21|table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
22|td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
23|td:first-child { color: var(--muted); font-weight: 500; white-space: nowrap; }
24|.note { background: rgba(249,115,22,0.08); border-radius: 6px; padding: 10px 14px; font-size: 0.85rem; margin-top: 8px; border-left: 3px solid var(--orange); }
25|.updated { font-size: 0.75rem; color: var(--muted); margin-top: 30px; text-align: center; }
26|</style>
27|</head>
28|<body>
29|<div class="detail-page">
30|  <a href="index.html" class="back-link">← Back to CRM</a>
31|  <h1>Rib City — Virginia Beach</h1>
32|  <div class="stage-label">🟠 Reviewed — Research Complete</div>
33|
34|  <div class="section">
35|    <h2>Pipeline</h2>
36|    <ul>
37|      <li><span class="check">✅</span> Contacted</li>
38|      <li><span class="uncheck">⬜</span> Applied</li>
39|      <li><span class="check">✅</span> Reviewed</li>
40|      <li><span class="uncheck">⬜</span> Interview Scheduled</li>
41|      <li><span class="uncheck">⬜</span> Interview Completed</li>
42|      <li><span class="uncheck">⬜</span> Article Draft</li>
43|      <li><span class="uncheck">⬜</span> Published</li>
44|      <li><span class="uncheck">⬜</span> Second Call</li>
45|      <li><span class="uncheck">⬜</span> Pitched (MBA)</li>
46|      <li><span class="uncheck">⬜</span> Won / Cold</li>
47|    </ul>
48|  </div>
49|
50|  <div class="section">
51|    <h2>Quick Facts</h2>
52|    <table>
53|      <tr><td>Brand</td><td>Rib City ("The Ribs That Legends Are Made Of")</td></tr>
54|      <tr><td>Type</td><td>Franchise BBQ restaurant (founded 1989, Fort Myers)</td></tr>
55|      <tr><td>Owner</td><td>Franchisee (name TBD)</td></tr>
56|      <tr><td>Phone</td><td>(757) 961-3690</td></tr>
57|      <tr><td>Website</td><td>ribcity.com</td></tr>
58|      <tr><td>Location</td><td>4688 Princess Anne Rd, Virginia Beach</td></tr>
59|      <tr><td>Rating</td><td>Google 4.3 ★</td></tr>
60|    </table>
61|  </div>
62|
63|  <div class="section">
64|    <h2>Interview</h2>
65|    <table>
66|      <tr><td>Status</td><td>Not yet scheduled</td></tr>
67|      <tr><td>Questions</td><td>8 prepared (franchise/local balance, why VB, catering)</td></tr>
68|    </table>
69|    <div class="note">Need to identify the franchisee name before outreach. Local FB page: Facebook.com/RibCityVB</div>
70|  </div>
71|
72|  <div class="section">
73|    <h2>Market Boss AI Opportunity</h2>
74|    <table>
75|      <tr><td>Tier</td><td>Growth ($1,750 setup / $875/mo)</td></tr>
76|      <tr><td>Pitch</td><td>"You've got the brand. When VB searches 'best BBQ near me,' I make sure you beat Mission BBQ."</td></tr>
77|    </table>
78|  </div>
79|
80|  <p class="updated">Full research brief: ribcity_research.txt • VBSpotlight CRM</p>
81|</div>
82|</body>
83|</html>`;
FILES['/marketbossai.html'] = `1|<!DOCTYPE html>
2|<html lang="en">
3|<head>
4|<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
5|<title>Market Boss AI — VBSpotlight CRM</title>
6|<style>
7|:root { --bg: #0f0f0f; --card: #1a1a1a; --text: #e0e0e0; --muted: #888; --accent: #7c3aed; --accent2: #a78bfa; --green: #22c55e; --orange: #f97316; }
8|* { box-sizing: border-box; margin: 0; padding: 0; }
9|body { font-family: system-ui, sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; padding: 16px; }
10|.detail-page { max-width: 700px; margin: 0 auto; }
11|h1 { font-size: 1.5rem; }
12|.back-link { display: inline-block; color: var(--muted); text-decoration: none; font-size: 0.85rem; margin-bottom: 16px; }
13|.back-link:hover { color: var(--text); }
14|.stage-label { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; padding: 3px 8px; border-radius: 4px; display: inline-block; margin-bottom: 12px; background: rgba(249,115,22,0.15); color: var(--orange); }
15|.section { background: var(--card); border-radius: 10px; padding: 18px; margin-bottom: 14px; }
16|.section h2 { font-size: 1rem; margin-bottom: 10px; color: var(--accent2); }
17|.section ul { list-style: none; }
18|.section ul li { padding: 4px 0; font-size: 0.9rem; display: flex; align-items: center; gap: 6px; }
19|.check { color: var(--green); }
20|.uncheck { color: var(--muted); }
21|table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
22|td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
23|td:first-child { color: var(--muted); font-weight: 500; white-space: nowrap; }
24|.badge-done { display: inline-block; font-size: 0.75rem; padding: 3px 10px; border-radius: 12px; background: rgba(34,197,94,0.15); color: var(--green); font-weight: 500; }
25|.updated { font-size: 0.75rem; color: var(--muted); margin-top: 30px; text-align: center; }
26|</style>
27|</head>
28|<body>
29|<div class="detail-page">
30|  <a href="index.html" class="back-link">← Back to CRM</a>
31|  <h1>Market Boss AI</h1>
32|  <div class="stage-label">🟠 Reviewed — Article Draft Ready</div>
33|
34|  <div class="section">
35|    <h2>Pipeline</h2>
36|    <ul>
37|      <li><span class="uncheck">⬜</span> Contacted</li>
38|      <li><span class="uncheck">⬜</span> Applied</li>
39|      <li><span class="check">✅</span> Reviewed</li>
40|      <li><span class="uncheck">⬜</span> Interview Scheduled</li>
41|      <li><span class="uncheck">⬜</span> Interview Completed</li>
42|      <li><span class="badge-done" style="display:inline-block;margin-left:6px;">Article draft complete</span></li>
43|      <li><span class="uncheck">⬜</span> Published</li>
44|      <li><span class="uncheck">⬜</span> Pitched (MBA)</li>
45|      <li><span class="uncheck">⬜</span> Won / Cold</li>
46|    </ul>
47|  </div>
48|
49|  <div class="section">
50|    <h2>Quick Facts</h2>
51|    <table>
52|      <tr><td>Founder</td><td>Jeff Wilson</td></tr>
53|      <tr><td>Phone</td><td>(757) 916-7077</td></tr>
54|      <tr><td>Email</td><td>info@marketbossai.com</td></tr>
55|      <tr><td>Website</td><td>marketbossai.com (Grade: A)</td></tr>
56|      <tr><td>Rating</td><td>5.0 ★ (18 reviews)</td></tr>
57|      <tr><td>Services</td><td>Local SEO, GBP, web design, social, email</td></tr>
58|    </table>
59|  </div>
60|
61|  <div class="section">
62|    <h2>Article</h2>
63|    <p style="font-size:0.9rem;">HTML draft complete at <code style="color:var(--accent2);">marketbossai_article.html</code></p>
64|    <p style="font-size:0.85rem;color:var(--muted);margin-top:6px;">~700 words, clean HTML, H2 headings with SEO keywords.</p>
65|  </div>
66|
67|  <div class="section">
68|    <h2>Note</h2>
69|    <p style="font-size:0.85rem;color:var(--muted);">This is Jeff's own company — he runs VBSpotlight. A self-interview or having someone else conduct it would work for the feature.</p>
70|  </div>
71|
72|  <p class="updated">Full research brief: marketbossai_research.txt • VBSpotlight CRM</p>
73|</div>
74|</body>
75|</html>`;
