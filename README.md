# Chatswood Catering Website

A modern, responsive landing page for Chatswood Catering, built with Next.js, React, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- SEO-friendly structure
- Contact form
- Google Maps integration
- Social media links
- Image optimization with Next.js Image component

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd chatswood-catering
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add any necessary environment variables.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── components/     # React components
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/
│   └── images/         # Static images
├── README.md
└── package.json
```

## Deployment on Vercel

The easiest way to deploy this website is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project into Vercel
3. Vercel will detect that you're using Next.js and set up the build configuration automatically
4. Your site will be deployed to a URL like `https://your-project.vercel.app`

## Customization

### Images
Replace the placeholder images in the `public/images` directory with your own images:
- hero-bg.jpg
- team.jpg
- western.jpg
- thai.jpg
- chinese.jpg
- custom.jpg

### Content
Update the content in the components to match your business:
- Update contact information in `Contact.tsx`
- Modify menu items in `CuisineHighlights.tsx`
- Edit services in `Services.tsx`
- Update testimonials in `Testimonials.tsx`

### Styling
- Modify the color scheme in `globals.css`
- Update the Tailwind configuration in `tailwind.config.js`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email info@chatswoodcatering.com.au or open an issue in the repository.
