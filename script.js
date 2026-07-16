const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

const boot = $('.boot');
const menuToggle = $('.menu-toggle');
const commandTrigger = $('.command-trigger');
const commandClose = $('.command-close');
const cursor = $('.cursor');
const cursorLabel = $('.cursor-label');
const progressBar = $('.page-progress span');
const hero = $('.hero');
const heroImage = $('.hero__image');
const headSystem = $('.head-system');
const pointerCoords = $('#pointer-coords');

window.addEventListener('load', () => {
  window.setTimeout(() => boot?.classList.add('is-hidden'), reduceMotion ? 0 : 1050);
});

menuToggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

$$('.nav a').forEach((link) => link.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

function setPalette(open) {
  document.body.classList.toggle('palette-open', open);
  $('.command-palette')?.setAttribute('aria-hidden', String(!open));
}

commandTrigger?.addEventListener('click', () => setPalette(true));
commandClose?.addEventListener('click', () => setPalette(false));
$$('.command-palette a').forEach((link) => link.addEventListener('click', () => setPalette(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === '/' && !/input|textarea/i.test(document.activeElement?.tagName || '')) {
    event.preventDefault();
    setPalette(true);
  }
  if (event.key === 'Escape') setPalette(false);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

$$('.reveal').forEach((element, index) => {
  if (element.closest('.hero')) element.style.transitionDelay = `${Math.min(index * 65, 260)}ms`;
  revealObserver.observe(element);
});

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  progressBar.style.transform = `scaleX(${ratio})`;
}, { passive: true });

if (finePointer && !reduceMotion) {
  let cursorX = window.innerWidth / 2;
  let cursorY = window.innerHeight / 2;
  let followX = cursorX;
  let followY = cursorY;

  document.addEventListener('pointermove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;
    document.documentElement.style.setProperty('--mx', `${cursorX}px`);
    document.documentElement.style.setProperty('--my', `${cursorY}px`);
    if (pointerCoords) pointerCoords.textContent = `${String(Math.round(cursorX)).padStart(3, '0')} / ${String(Math.round(cursorY)).padStart(3, '0')}`;
  });

  const moveCursor = () => {
    followX += (cursorX - followX) * 0.18;
    followY += (cursorY - followY) * 0.18;
    cursor.style.transform = `translate(${followX}px, ${followY}px) translate(-50%, -50%)`;
    cursorLabel.style.transform = `translate(${followX}px, ${followY}px) translate(-50%, -50%)`;
    requestAnimationFrame(moveCursor);
  };
  moveCursor();

  $$('a, button, [data-cursor]').forEach((element) => {
    element.addEventListener('pointerenter', () => {
      const label = element.dataset.cursor || (element.matches('button') ? 'CLICK' : 'OPEN');
      cursor.classList.add('is-active');
      cursorLabel.classList.add('is-active');
      cursorLabel.textContent = label;
    });
    element.addEventListener('pointerleave', () => {
      cursor.classList.remove('is-active');
      cursorLabel.classList.remove('is-active');
    });
  });

  $$('.magnetic').forEach((element) => {
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * 0.11}px, ${y * 0.11}px)`;
    });
    element.addEventListener('pointerleave', () => { element.style.transform = ''; });
  });

  $$('.tilt-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
      const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -7;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });

  hero?.addEventListener('pointermove', (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    heroImage.style.transform = `scale(1.065) translate(${x * -12}px, ${y * -9}px)`;
    headSystem.style.setProperty('--hx', `${x * 18}px`);
    headSystem.style.setProperty('--hy', `${y * 14}px`);
  });
  hero?.addEventListener('pointerleave', () => {
    heroImage.style.transform = '';
    headSystem.style.setProperty('--hx', '0px');
    headSystem.style.setProperty('--hy', '0px');
  });
}

function initSignalCanvas() {
  const canvas = $('#signal-canvas');
  if (!canvas || reduceMotion) return;
  const context = canvas.getContext('2d');
  const pointer = { x: -999, y: -999 };
  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(42, Math.min(90, Math.floor(width / 18)));
    particles = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: index % 9 === 0 ? 2 : 1
    }));
  }

  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
  });
  hero.addEventListener('pointerleave', () => { pointer.x = -999; pointer.y = -999; });

  function frame() {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle, index) => {
      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 150) {
        particle.vx -= dx * 0.000012;
        particle.vy -= dy * 0.000012;
      }
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;
      particle.vx *= 0.999;
      particle.vy *= 0.999;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      context.fillStyle = index % 7 === 0 ? 'rgba(221,185,255,.8)' : 'rgba(181,108,255,.42)';
      context.fill();

      for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
        const other = particles[otherIndex];
        const linkDistance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (linkDistance < 105) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(181,108,255,${(1 - linkDistance / 105) * 0.2})`;
          context.lineWidth = 0.6;
          context.stroke();
        }
      }
    });
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener('resize', resize);
  frame();
}
initSignalCanvas();

let packets = 1284;
window.setInterval(() => {
  packets += Math.floor(Math.random() * 19) + 1;
  const packetNode = $('.packet-count');
  if (packetNode) packetNode.textContent = String(packets).padStart(6, '0');
}, 900);

const codeSamples = {
  build: `<span class="code-muted">// local-first intelligence pipeline</span>\n<span class="code-purple">const</span> system = <span class="code-purple">new</span> <span class="code-lilac">GodEye</span>({\n  source: <span class="code-green">"nextdns"</span>,\n  storage: <span class="code-green">"sqlite"</span>,\n  telemetry: <span class="code-purple">false</span>\n});\n\n<span class="code-purple">await</span> system.<span class="code-lilac">observe</span>();\n<span class="code-purple">await</span> system.<span class="code-lilac">classify</span>({\n  behavior: <span class="code-purple">true</span>,\n  context: <span class="code-purple">true</span>\n});\n\n<span class="code-green">✓ signal pipeline ready</span>`,
  ship: `<span class="code-muted"># build once, ship clean</span>\n<span class="code-purple">dotnet</span> publish ./src \\\n  -c Release \\\n  -r win-x64 \\\n  --self-contained true\n\n<span class="code-purple">npm</span> run build\n<span class="code-purple">wrangler</span> deploy\n\n<span class="code-green">✓ binaries verified</span>\n<span class="code-green">✓ worker deployed</span>\n<span class="code-green">✓ release ready</span>`,
  monitor: `<span class="code-muted">// evidence over noise</span>\n<span class="code-purple">SELECT</span> device, domain, risk\n<span class="code-purple">FROM</span> activity\n<span class="code-purple">WHERE</span> behavior != <span class="code-green">"baseline"</span>\n<span class="code-purple">ORDER BY</span> confidence DESC;\n\n07:42:16  DNS / LIVE\n07:42:17  DEVICE / LINKED\n07:42:18  RISK / EXPLAINED\n\n<span class="code-green">✓ monitoring without telemetry</span>`
};

function setCodeMode(mode) {
  const output = $('.code-output code');
  if (output) output.innerHTML = codeSamples[mode];
  $$('.code-tab').forEach((tab) => {
    const active = tab.dataset.mode === mode;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
  });
}
setCodeMode('build');
$$('.code-tab').forEach((tab) => tab.addEventListener('click', () => setCodeMode(tab.dataset.mode)));

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const target = Number(entry.target.dataset.count);
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / 900);
      entry.target.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countObserver.unobserve(entry.target);
  });
}, { threshold: 0.7 });
$$('[data-count]').forEach((counter) => countObserver.observe(counter));

async function attachOptionalMedia(element, container, missingClass, onReady) {
  const source = element?.dataset.source;
  if (!element || !source) return false;
  try {
    const response = await fetch(source, { method: 'HEAD', cache: 'no-store' });
    if (!response.ok) throw new Error('missing');
    element.src = source;
    container?.classList.add(missingClass);
    onReady?.();
    return true;
  } catch {
    return false;
  }
}

const video = $('#feature-video');
const videoPlayer = $('.video-player');
const videoToggle = $('.video-toggle');
const videoMute = $('#video-mute');
const videoVolume = $('#video-volume');
const videoVolumeValue = $('#video-volume-value');
let hasVideo = false;
attachOptionalMedia(video, videoPlayer, 'has-video', () => {
  hasVideo = true;
  video.volume = 0.22;
  video.muted = true;
  video.play().catch(() => {});
});
videoToggle?.addEventListener('click', async () => {
  if (!hasVideo) return;
  if (video.paused) {
    await video.play();
    videoToggle.querySelector('span').textContent = 'Ⅱ';
  } else {
    video.pause();
    videoToggle.querySelector('span').textContent = '▶';
  }
});

function updateVideoSoundUI() {
  if (!video) return;
  videoMute.textContent = video.muted ? 'SOUND OFF' : 'SOUND ON';
  videoMute.setAttribute('aria-pressed', String(video.muted));
  videoVolume.value = String(Math.round(video.volume * 100));
  videoVolumeValue.textContent = `${Math.round(video.volume * 100)}%`;
}

videoMute?.addEventListener('click', async () => {
  video.muted = !video.muted;
  if (!video.muted && video.paused) await video.play();
  updateVideoSoundUI();
});

videoVolume?.addEventListener('input', async () => {
  video.volume = Number(videoVolume.value) / 100;
  video.muted = video.volume === 0;
  if (!video.muted && video.paused) await video.play();
  updateVideoSoundUI();
});

video?.addEventListener('volumechange', updateVideoSoundUI);
updateVideoSoundUI();

const audio = $('#cardigan-audio');
const audioToggle = $('#audio-toggle');
const audioReplay = $('#audio-replay');
const audioMute = $('#audio-mute');
const audioVolume = $('#audio-volume');
const audioVolumeValue = $('#audio-volume-value');
const audioMode = $('#audio-mode');
const audioTime = $('#audio-time');
const audioProgress = $('.audio-progress i');
const woundStage = $('#wound-stage');
const cueSpans = $$('.lyric-sync [data-cue]');
const SOURCE_OFFSET = 16;
const AUDIO_START = 0;
const VISUAL_DURATION = 8;
let hasAudio = false;
let demoPlaying = false;
let demoStart = 0;
let syncFrame = 0;

attachOptionalMedia(audio, null, '', () => {
  hasAudio = true;
  audio.volume = 0.28;
  audio.muted = false;
  audioMode.textContent = 'CARDIGAN / READY AT 00:16';
  audioToggle.querySelector('span').textContent = 'PLAY SONG';
  let audioPrepared = false;
  const prepareAudio = () => {
    if (audioPrepared || !Number.isFinite(audio.duration) || audio.duration <= AUDIO_START) return;
    audioPrepared = true;
    audio.currentTime = AUDIO_START;
    audioTime.textContent = `${formatTime(SOURCE_OFFSET)} / ${formatTime(audio.duration + SOURCE_OFFSET)}`;
  };
  if (audio.readyState >= 1) prepareAudio();
  else audio.addEventListener('loadedmetadata', prepareAudio, { once: true });
  audio.addEventListener('canplay', prepareAudio, { once: true });
  window.setTimeout(prepareAudio, 100);
});

function formatTime(seconds) {
  const safe = Number.isFinite(seconds) ? seconds : 0;
  const minutes = Math.floor(safe / 60);
  const remainingSeconds = Math.floor(safe % 60);
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function syncWound(time, duration = VISUAL_DURATION, mediaTime = time, mediaDuration = duration) {
  const loopTime = Math.max(0, time);
  let phase = 'idle';
  if (loopTime >= 0.4 && loopTime < 2.2) phase = 'scar';
  if (loopTime >= 2.2 && loopTime < 5.0) phase = 'stars';
  if (loopTime >= 5.0) phase = 'bleed';
  woundStage.dataset.phase = phase;

  const cueTimes = [0.35, 1.3, 2.25, 4.6, 5.45];
  let activeCue = 0;
  cueTimes.forEach((cue, index) => { if (loopTime >= cue) activeCue = index; });
  cueSpans.forEach((span, index) => span.classList.toggle('is-active', index === activeCue));

  const ratio = Math.min(1, Math.max(0, (mediaTime - SOURCE_OFFSET) / Math.max(mediaDuration - SOURCE_OFFSET, 0.1)));
  audioProgress.style.transform = `scaleX(${ratio})`;
  audioTime.textContent = `${formatTime(mediaTime)} / ${formatTime(mediaDuration)}`;
}

function runSync(now) {
  if (hasAudio && !audio.paused) {
    syncWound(audio.currentTime, VISUAL_DURATION, audio.currentTime + SOURCE_OFFSET, (audio.duration || VISUAL_DURATION) + SOURCE_OFFSET);
    syncFrame = requestAnimationFrame(runSync);
    return;
  }
  if (demoPlaying) {
    const elapsed = (now - demoStart) / 1000;
    if (elapsed >= VISUAL_DURATION) {
      demoPlaying = false;
      syncWound(VISUAL_DURATION, VISUAL_DURATION, SOURCE_OFFSET + VISUAL_DURATION, SOURCE_OFFSET + VISUAL_DURATION);
      audioToggle.querySelector('span').textContent = 'REPLAY VISUAL / DEMO';
      audioToggle.querySelector('b').textContent = '↻';
      return;
    }
    syncWound(elapsed, VISUAL_DURATION, SOURCE_OFFSET + elapsed, SOURCE_OFFSET + VISUAL_DURATION);
    syncFrame = requestAnimationFrame(runSync);
  }
}

audioToggle?.addEventListener('click', async () => {
  cancelAnimationFrame(syncFrame);
  if (hasAudio) {
    if (audio.paused) {
      if (audio.ended) audio.currentTime = AUDIO_START;
      await audio.play();
      audioToggle.querySelector('span').textContent = 'PAUSE SONG';
      audioToggle.querySelector('b').textContent = 'Ⅱ';
      syncFrame = requestAnimationFrame(runSync);
    } else {
      audio.pause();
      audioToggle.querySelector('span').textContent = 'PLAY SONG';
      audioToggle.querySelector('b').textContent = '▶';
    }
    return;
  }
  demoPlaying = true;
  demoStart = performance.now();
  audioToggle.querySelector('span').textContent = 'RUNNING VISUAL / DEMO';
  audioToggle.querySelector('b').textContent = 'Ⅱ';
  audioMode.textContent = 'DEMO TIMELINE / NO AUDIO';
  syncFrame = requestAnimationFrame(runSync);
});

audioReplay?.addEventListener('click', async () => {
  if (!hasAudio) {
    demoPlaying = true;
    demoStart = performance.now();
    syncFrame = requestAnimationFrame(runSync);
    return;
  }
  cancelAnimationFrame(syncFrame);
  audio.currentTime = AUDIO_START;
  woundStage.dataset.phase = 'idle';
  await audio.play();
  audioToggle.querySelector('span').textContent = 'PAUSE SONG';
  audioToggle.querySelector('b').textContent = 'Ⅱ';
  syncFrame = requestAnimationFrame(runSync);
});

function updateAudioSoundUI() {
  if (!audio) return;
  audioMute.textContent = audio.muted ? 'UNMUTE' : 'MUTE';
  audioMute.setAttribute('aria-pressed', String(audio.muted));
  audioVolume.value = String(Math.round(audio.volume * 100));
  audioVolumeValue.textContent = `${Math.round(audio.volume * 100)}%`;
}

audioMute?.addEventListener('click', () => {
  audio.muted = !audio.muted;
  updateAudioSoundUI();
});

audioVolume?.addEventListener('input', () => {
  audio.volume = Number(audioVolume.value) / 100;
  audio.muted = audio.volume === 0;
  updateAudioSoundUI();
});

audio?.addEventListener('volumechange', updateAudioSoundUI);
updateAudioSoundUI();

audio?.addEventListener('ended', () => {
  cancelAnimationFrame(syncFrame);
  audio.currentTime = AUDIO_START;
  audioToggle.querySelector('span').textContent = 'PLAY SONG';
  audioToggle.querySelector('b').textContent = '▶';
});

woundStage?.addEventListener('pointerdown', (event) => {
  const rect = woundStage.getBoundingClientRect();
  const star = document.createElement('span');
  star.className = 'burst-star';
  star.textContent = '✦';
  star.style.left = `${event.clientX - rect.left}px`;
  star.style.top = `${event.clientY - rect.top}px`;
  woundStage.appendChild(star);
  window.setTimeout(() => star.remove(), 1300);
});

document.getElementById('year').textContent = new Date().getFullYear();
