# BullBearSync

BullBearSync is a robust platform designed to provide detailed financial insights and investment strategies for the stock market. With an intuitive interface and powerful features, BullBearSync helps investors make informed decisions based on accurate and up-to-date financial data.

## Features

- **Company Profile**: View detailed company information, including history, key executives, and major performance indicators.
- **Income Statement**: Access comprehensive income statements, detailing revenue, expenses, and profits over time.
- **Balance Sheet**: Analyze companies' balance sheets with data on assets, liabilities, and equity.
- **Cash Flow Statement**: Monitor companies' cash flows to understand financial health and liquidity.
- **Historical Dividend**: Review dividend history to assess returns on investments over time.
- **10-K Reports**: Track annual 10-K reports for an in-depth view of operations and financial results.

## Technologies Used

- **Frontend**: Developed with React for a dynamic and responsive user experience.
- **Backend**: Implemented in ASP.NET Core with C# to ensure a robust and secure RESTful API.
- **Database**: Integrated using Entity Framework for efficient interaction with SQL databases.
- **Authentication**: JWT-based authentication and authorization to ensure user security.
- **API Integration**: Consumed the Financial Modeling Prep API to retrieve up-to-date financial data.
- **Styling**: Used CSS and Tailwind CSS for a modern and consistent interface.
- **Agile Development**: Applied agile practices throughout the development process.

## How to Run the Project

### Prerequisites

- Node.js
- .NET Core SDK
- Account on Financial Modeling Prep API

### Setup Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/username/BullBearSync.git
   cd BullBearSync
    ```
2. **Install Frontend Dependencies:**
    ```bash 
    cd frontend
    npm install
    ```
3. **Install Backend Dependencies:**
    ```bash
    cd ../backend
    dotnet restore
    ```
4. **API Key Configuration:**
    In the backend, add your Financial Modeling Prep API key in the appsettings.json file.

5. **Run the Backend:**
    ```bash
    dotnet watch run
    ```

6. **Run the Frontend:**
    ```bash
    npm start
    ```

## Future Enhancements

- Implementation of interactive charts for financial data visualization.
- Integration with additional financial APIs to expand the dataset.
- Performance optimizations to improve data loading and user experience.

## Contribution

Contributions are welcome! Feel free to open issues and pull requests in the repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
