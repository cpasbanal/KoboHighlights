# KoboHighlights

KoboHighlights is a web application designed to extract and display highlights from the KoboReader.sqlite file.

## Table of Contents

- [KoboHighlights](#kobohighlights)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Installation](#installation)
    - [Requirements](#requirements)
    - [Steps](#steps)
  - [Usage](#usage)
  - [Docker Usage](#docker-usage)
  - [Future Plans](#future-plans)
  - [Contributing](#contributing)
  - [License](#license)

## Description

This project enables users to upload their KoboReader.sqlite file and view a list of books with annotations and the annotations themselves. Users can also send these annotations to Notion.

## Features

- Extract highlights from KoboReader.sqlite file
- View list of books and their annotations
- Send annotations to Notion
- Save annotations to local storage for offline access
- Multi-language support (English and Turkish)
- Dark mode support
- Resizable panels
- Responsive UI

## Installation

To run the project locally, follow these steps:

### Requirements

- Node.js (>=14.x)
- pnpm package manager

### Steps

1. Clone the repository:

    ```sh
    git clone https://github.com/TaylanTatli/kobohighlights.git
    cd kobohighlights
    ```

2. Install dependencies:

    ```sh
    pnpm install
    ```

3. (Optional) Create a `.env` file in the root directory and add your environment variables:

    ```sh
    NEXT_PUBLIC_NOTION_PAGE_ID=your_notion_page_id
    NEXT_PUBLIC_NOTION_API_KEY=your_notion_api_key
    ```

    This is only necessary if you want to predefine your page ID and API key. If you don't create this file, you will need to enter your page ID and API key when you send annotations to Notion. These values will be saved to local storage for next time.

4. Start the development server:

    ```sh
    pnpm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Upload your `KoboReader.sqlite` file.
3. View the list of books and their highlights.
4. Optionally, send highlights to Notion by entering your Notion Page ID and API Key, or download them to your PC.

## Docker Usage

To run the project using Docker, follow these steps:

1. Build the Docker image:

    ```sh
    docker build -t kobohighlights .
    ```

2. Start the Docker container:

    ```sh
    docker run -p 3000:3000 kobohighlights
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Future Plans

- Improve the user interface and user experience
- Add more export options (e.g., PDF)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
