# Github Profile Finder

A simple web application that allows users to search for and display GitHub user profiles using the GitHub API. Users can enter a GitHub username and view basic profile information including repositories count, followers, and following numbers.

## Features

- Search GitHub users by username
- Display user's profile picture
- Show public repository count
- Display number of followers and following
- Direct link to GitHub profile
- Responsive loading state
- Support for both button click and Enter key search

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub REST API

## Getting Started

### Prerequisites

- A modern web browser
- Internet connection to access the GitHub API

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/github-profile-finder.git
```

2. Navigate to the project directory:
```bash
cd github-profile-finder
```

3. Open `index.html` in your web browser.

## Usage

1. Type a GitHub username in the search box
2. Click the "Search" button or press Enter
3. Wait for the profile information to load
4. View the user's:
   - Profile picture
   - Username (clickable link to GitHub profile)
   - Number of public repositories
   - Number of followers
   - Number of following

## API Reference

This project uses the GitHub REST API v3. The specific endpoint used is:
```
GET https://api.github.com/users/{username}
```

## CSS Classes

- `.loading-text`: Controls the visibility of loading message
- `.show`: Shows the loading message
- `.hide`: Hides the profile details while loading
- `.github-profile-details`: Container for profile information
