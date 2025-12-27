# Himachal Taxi Service Website

A professional, mobile-responsive taxi service website for a taxi driver based in Himachal Pradesh providing services across All India.

## 📁 Project Structure

```
Client_project/
├── index.html              # Home page
├── about.html              # About Us page
├── services.html           # Services page
├── packages.html           # Tour Packages page
├── vehicles.html           # Fleet/Vehicles page
├── contact.html            # Contact Us page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── images/                 # Image folder (optional for local images)
└── README.md              # This file
```

## 🎨 Design Features

### Color Palette
- **Primary Color**: Dark Blue (#0B3C5D) - Trust & Professionalism
- **Secondary Color**: Yellow (#F4D03F) - Taxi Theme Highlight
- **Text Color**: Dark Grey (#333333)
- **Background**: White & Light Grey (#f8f9fa)

### Typography
- **Headings**: Poppins/Montserrat (Google Fonts)
- **Body Text**: Open Sans (Google Fonts)

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet-optimized layouts
- ✅ Desktop-enhanced experience
- ✅ Hamburger menu for mobile navigation
- ✅ Touch-friendly buttons and links

## 📄 Pages Overview

### 1. **Home Page (index.html)**
- Hero section with CTA buttons
- Highlights section (4 key features)
- Features section (6 service highlights)
- Call-to-action section
- Floating contact buttons

### 2. **About Us (about.html)**
- Driver profile and experience
- Expertise sections
- Customer testimonials
- Trust-building content

### 3. **Services (services.html)**
- 6 main services with details:
  - Local Taxi Service
  - Outstation Taxi (All India)
  - Airport Pickup & Drop
  - Tourist Taxi Packages
  - One-Way & Round Trip
  - Corporate Travel
- Service features breakdown

### 4. **Tour Packages (packages.html)**
- 6 curated tour packages:
  - Shimla – Manali Highway
  - Dharamshala – Dalhousie Loop
  - Manali – Leh Highway
  - Customized Himachal Tour
  - Honeymoon Package
  - Adventure Trail Package
- Popular destinations section
- Package benefits

### 5. **Vehicles (vehicles.html)**
- Fleet showcase:
  - Swift Dzire (4 seater)
  - Toyota Innova (6-7 seater)
  - Maruti Ertiga (6-7 seater)
- Vehicle specifications
- Maintenance standards
- Comfort amenities

### 6. **Contact Us (contact.html)**
- Multiple contact methods:
  - Phone number (clickable)
  - WhatsApp integration
  - Contact form
  - Google Map placeholder
- Quick contact cards
- FAQ section

## 🚀 Getting Started

### Installation
1. Extract the project folder
2. No installation required - pure HTML, CSS, and JavaScript
3. Open `index.html` in any modern web browser

### How to Run Locally
1. **Using any browser**: Simply open `index.html` in your browser
2. **Using a local server** (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx http-server
   ```
   Then visit: `http://localhost:8000`

## ⚙️ Customization Guide

### Update Contact Information
Replace the phone number in all files:
- **Current**: `+919876543210`
- **Location**: Multiple places in HTML and JavaScript
- **Files to update**: All `.html` files and `js/script.js`

### Update WhatsApp Number
- Open each HTML file and replace WhatsApp links
- Update in `js/script.js` as well

### Change Colors
Edit `css/style.css`:
```css
:root {
  --primary-color: #0B3C5D;        /* Dark Blue */
  --secondary-color: #F4D03F;      /* Yellow */
  --white: #ffffff;
  --light-grey: #f8f9fa;
  --dark-grey: #333333;
  --text-color: #404040;
}
```

### Add Local Images
1. Place images in `images/` folder
2. Update image paths in HTML from:
   ```html
   <img src="https://images.unsplash.com/..." alt="Description">
   ```
   To:
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

### Update Google Map
In `contact.html`, replace the iframe src with your location:
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"></iframe>
```

## 🔧 Features Implemented

### Mobile Responsiveness
- ✅ Hamburger menu toggle
- ✅ Responsive grid layouts
- ✅ Mobile-optimized buttons
- ✅ Sticky call button (appears on scroll on mobile)
- ✅ Touch-friendly navigation

### Interactive Elements
- ✅ Smooth scroll navigation
- ✅ Floating call button (mobile)
- ✅ Floating WhatsApp button
- ✅ Hover effects on cards
- ✅ Form validation
- ✅ Mobile menu toggle

### SEO Features
- ✅ Meta descriptions
- ✅ Semantic HTML structure
- ✅ Heading hierarchy
- ✅ Alt tags for images
- ✅ Mobile-first design

### Performance
- ✅ Lightweight CSS
- ✅ Minimal JavaScript
- ✅ Fast loading (uses CDN fonts)
- ✅ Optimized for mobile networks

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🔗 Navigation Structure

```
Home (index.html)
├── About (about.html)
├── Services (services.html)
├── Tour Packages (packages.html)
├── Vehicles (vehicles.html)
└── Contact (contact.html)
```

All pages have:
- Consistent header with navigation
- Floating call & WhatsApp buttons
- Footer with links
- Mobile hamburger menu

## 📞 Contact Integration

### Phone Integration
- Click-to-call on desktop (tel: protocol)
- Direct calling on mobile devices
- Sticky call button on mobile (appears when scrolling)

### WhatsApp Integration
- Direct WhatsApp messaging
- Pre-filled messages
- Works on mobile and web
- Opens in new tab

### Contact Form
- Name, phone, email fields
- Service selection dropdown
- Message textarea
- Form validation
- Redirects to WhatsApp on submit

## 🎯 Key Highlights

1. **Professional Design**: Clean, modern, trust-building aesthetic
2. **Complete Information**: All services, vehicles, and packages documented
3. **Multiple Contact Options**: Phone, WhatsApp, Email, Contact Form
4. **Testimonials**: Customer reviews build confidence
5. **SEO Ready**: Proper meta tags and semantic HTML
6. **Mobile First**: Fully functional on all devices
7. **No Dependencies**: Pure HTML, CSS, JavaScript (no frameworks)
8. **Easy to Update**: Beginner-friendly code with comments
9. **Quick Load**: Optimized images and minimal scripts
10. **Accessibility**: Proper heading hierarchy and alt tags

## 📝 Code Comments

All CSS and JavaScript files are well-commented for easy understanding and modification by non-technical users.

### CSS Sections
- Root variables
- Reset & base styles
- Buttons & containers
- Header & navigation
- Hero section
- Service cards
- Footer
- Animations
- Responsive breakpoints

### JavaScript Functionality
- Mobile menu toggle
- Smooth scrolling
- Form submission
- Floating button interactions
- Scroll animations
- Navigation highlighting

## 🚀 Deployment

### Deploy to Web Hosting
1. Upload all files to your web hosting
2. Ensure folder structure is maintained
3. Update contact numbers and emails
4. Add local images if needed
5. Test on different devices

### Deploy to GitHub Pages
1. Create a GitHub repository
2. Push all files
3. Enable GitHub Pages in settings
4. Access via `username.github.io/repository-name`

## 📋 Checklist for Going Live

- [ ] Update phone number (+919876543210)
- [ ] Update WhatsApp number
- [ ] Update email address
- [ ] Add local images (optional)
- [ ] Update Google Map location
- [ ] Test all links and buttons
- [ ] Test on mobile devices
- [ ] Test contact form
- [ ] Check loading speed
- [ ] Setup email notifications for contact form (backend required)

## 🔐 Security Notes

- Contact form currently redirects to WhatsApp
- For email notifications, you'll need a backend service
- No sensitive data is stored locally
- All external links open in new tabs

## 🎓 Learning Resources

If you want to modify the code:
- **HTML**: Learn about semantic HTML tags
- **CSS**: Understand flexbox and grid layouts
- **JavaScript**: Basic DOM manipulation and event handling

## 📧 Support & Customization

For any customization needs:
1. Update the contact information
2. Modify colors in CSS variables
3. Add/remove pages as needed
4. Update images and content
5. Add backend for email notifications (optional)

## 📄 License

This website template is provided as-is for personal and business use.

---

**Created with ❤️ for Himachal Taxi Service**

*Professional • Reliable • Affordable • Available 24x7*