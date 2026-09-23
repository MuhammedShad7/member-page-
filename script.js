// Interactive behavior for TalentProof team page

const teamData = {
  divya: {
    badge: '01',
    name: 'Divya',
    role: 'Product & Research Lead',
    quote: 'Turning real user problems into meaningful product experiences.',
    responsibilities: [
      'Understands student and recruiter problems',
      'Helps define product requirements',
      'Researches user needs and workflows',
      'Converts feedback into useful features'
    ]
  },
  abhishek: {
    badge: '02',
    name: 'Abhishek',
    role: 'Tech Lead',
    quote: 'Building the technology that powers TalentProof.',
    responsibilities: [
      'Handles application architecture',
      'Builds core frontend and backend functionality',
      'Works with databases and APIs',
      'Focuses on reliability and scalability'
    ]
  },
  shad: {
    badge: '03',
    name: 'Shad',
    role: 'AI & Assessment Lead',
    quote: 'Making skill assessment smarter, evidence-based, and transparent.',
    responsibilities: [
      'Develops AI-powered assessment workflows',
      'Works on project analysis',
      'Designs evidence-based technical questions',
      'Helps create transparent assessment reports'
    ]
  },
  nikhil: {
    badge: '04',
    name: 'Nikhil',
    role: 'Design & UX Lead',
    quote: 'Creating simple experiences that make complex technology easy to use.',
    responsibilities: [
      'Designs the TalentProof interface',
      'Creates user flows and interactions',
      'Improves usability and accessibility',
      'Maintains the visual identity of the product'
    ]
  },
  gowtham: {
    badge: '05',
    name: 'Gowtham',
    role: 'Product & Technology Lead',
    quote: 'Turning ideas into practical products through technology and execution.',
    responsibilities: [
      'Works on product development and implementation',
      'Converts ideas into working features',
      'Contributes to technical decisions',
      'Coordinates product requirements with development',
      'Helps improve the overall platform experience'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Navigation active tab switcher
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Modal elements
  const modal = document.getElementById('details-modal');
  const modalBadge = document.getElementById('modal-badge');
  const modalName = document.getElementById('modal-name');
  const modalRole = document.getElementById('modal-role');
  const modalQuote = document.getElementById('modal-quote');
  const modalList = document.getElementById('modal-list');
  const closeBtn = document.querySelector('.modal-close');

  function openMemberDetails(key) {
    const data = teamData[key];
    if (!data) return;

    modalBadge.textContent = data.badge;
    modalName.textContent = data.name;
    modalRole.textContent = data.role;
    modalQuote.textContent = `"${data.quote}"`;

    modalList.innerHTML = '';
    data.responsibilities.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      modalList.appendChild(li);
    });

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Card click & hover interactions
  const cards = document.querySelectorAll('.team-card');
  cards.forEach(card => {
    const memberKey = card.getAttribute('data-member');
    card.addEventListener('click', () => {
      openMemberDetails(memberKey);
    });

    card.addEventListener('mouseenter', () => {
      const avatar = card.querySelector('.avatar-container');
      if (avatar) {
        avatar.style.transform = 'scale(1.05)';
      }
    });

    card.addEventListener('mouseleave', () => {
      const avatar = card.querySelector('.avatar-container');
      if (avatar) {
        avatar.style.transform = 'scale(1)';
      }
    });
  });
});
