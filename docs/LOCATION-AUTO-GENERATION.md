# Location Page Auto-Generation Feature

## Overview
This feature allows admins to automatically generate location-based landing pages with service-specific content by simply entering a location name and selecting a service focus.

## How It Works

### Admin Panel Flow
1. Navigate to **Admin → Locations → Add New Location**
2. Enter the **Location Name** (e.g., "Karol Bagh")
3. Select **Service Focus** from dropdown:
   - Web Development
   - Digital Marketing
   - SEO Services
   - Graphic Designing
   - Content Writing
   - All Services (comprehensive)
4. Click **"Auto-Generate Content"** button
5. Review and edit the auto-generated content if needed
6. Save the location page

### What Gets Auto-Generated

Based on your selections, the system automatically generates:

- **Slug**: SEO-friendly URL (e.g., `best-web-development-company-in-karol-bagh`)
- **Title**: Page title with location and service (e.g., "Best Web Development Company in Karol Bagh | Sitekaro")
- **Meta Description**: SEO-optimized description
- **Content Sections**:
  - Hero section with subtitle and CTAs
  - Story section explaining why businesses need the service
  - Leading company section
  - 3 service cards with features

### Service Focus Templates

#### 1. Web Development
- **Slug Pattern**: `best-web-development-company-in-{location}`
- **Focus**: Custom websites, e-commerce, web applications
- **Services Highlighted**: Web development, design, UX, local support

#### 2. Digital Marketing
- **Slug Pattern**: `best-digital-marketing-agency-in-{location}`
- **Focus**: SEO, social media, PPC, content marketing
- **Services Highlighted**: Local SEO, social media, PPC advertising

#### 3. SEO Services
- **Slug Pattern**: `best-seo-company-in-{location}`
- **Focus**: Search engine optimization, rankings, organic traffic
- **Services Highlighted**: Local SEO, technical SEO, link building

#### 4. Graphic Designing
- **Slug Pattern**: `best-graphic-design-company-in-{location}`
- **Focus**: Logo design, brand identity, UI/UX
- **Services Highlighted**: Logo design, UI/UX, marketing materials

#### 5. Content Writing
- **Slug Pattern**: `best-content-writing-services-in-{location}`
- **Focus**: SEO blogs, website copy, marketing content
- **Services Highlighted**: SEO blogs, website content, marketing copy

#### 6. All Services
- **Slug Pattern**: `best-web-development-company-in-{location}`
- **Focus**: Comprehensive digital solutions
- **Services Highlighted**: Web development, digital marketing, design

## Features

### ✅ Template-Based Generation
- No AI/API calls needed
- Instant generation
- Consistent quality
- Zero additional cost

### ✅ Fully Editable
- All auto-generated fields can be edited
- Customize content for specific locations
- Add/remove service sections
- Upload custom images

### ✅ SEO Optimized
- Keyword-rich titles and descriptions
- Location-specific content
- Service-focused landing pages
- Proper heading structure

### ✅ Regeneration Support
- Regenerate content anytime with the refresh button
- Confirms before overwriting changes
- Useful when changing service focus

## Technical Implementation

### Database Schema
```prisma
model LocationPage {
  id           String   @id @default(cuid())
  slug         String   @unique
  location     String
  serviceFocus String   @default("all-services")
  title        String
  description  String?
  content      Json?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}
```

### Template System
Located in `lib/location-templates.ts`:
- `generateLocationTemplate()` - Main generation function
- Service-specific template functions
- Content structure definitions

### Form Component
Located in `components/admin/LocationForm.tsx`:
- Service focus dropdown
- Auto-generate button
- Real-time content updates
- Editable fields

## Usage Examples

### Example 1: Web Development in Rohini
```
Location: Rohini
Service Focus: Web Development

Generated:
- Slug: best-web-development-company-in-rohini
- Title: Best Web Development Company in Rohini | Sitekaro
- Content: Web development focused with local Rohini references
```

### Example 2: SEO Services in Karol Bagh
```
Location: Karol Bagh
Service Focus: SEO Services

Generated:
- Slug: best-seo-company-in-karol-bagh
- Title: Best SEO Company in Karol Bagh | Sitekaro
- Content: SEO focused with Karol Bagh market insights
```

### Example 3: All Services in Dwarka
```
Location: Dwarka
Service Focus: All Services

Generated:
- Slug: best-web-development-company-in-dwarka
- Title: Best Web Development & Digital Marketing Company in Dwarka
- Content: Comprehensive coverage of all services
```

## Benefits

### For Admins
- ⚡ Save time - no manual content writing
- 🎯 Consistent quality across all locations
- 📝 Easy to customize if needed
- 🔄 Quick regeneration for updates

### For SEO
- 🎯 Targeted landing pages for each location + service
- 📈 Better keyword targeting
- 🌍 Local SEO optimization
- 🔗 Internal linking opportunities

### For Business
- 💰 No AI API costs
- ⚡ Instant page creation
- 📊 Scalable to hundreds of locations
- 🎨 Professional, consistent content

## Best Practices

1. **Choose the Right Service Focus**
   - Use specific service focus for targeted campaigns
   - Use "All Services" for general location pages

2. **Customize When Needed**
   - Add local landmarks or specific details
   - Update images to match the location
   - Adjust CTAs based on campaign goals

3. **SEO Optimization**
   - Review generated meta descriptions
   - Ensure slug is SEO-friendly
   - Add location-specific keywords if needed

4. **Content Quality**
   - Review auto-generated content before publishing
   - Add unique local insights when possible
   - Keep content updated and relevant

## Future Enhancements

Potential improvements for future versions:
- [ ] Bulk location generation (CSV import)
- [ ] Custom template creation
- [ ] A/B testing for different templates
- [ ] Analytics integration
- [ ] Image auto-selection based on service
- [ ] Multi-language support

## Support

For issues or questions about this feature:
1. Check this documentation
2. Review the template code in `lib/location-templates.ts`
3. Test with different service focus options
4. Contact the development team

---

**Last Updated**: March 2026
**Version**: 1.0.0
