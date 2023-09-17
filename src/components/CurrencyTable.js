import './CurrencyTable.css';

function CurrencyTable({ crypto, search }) {
    return (
        <div className='table-container'>
            <table className="currency-container">
                {/* 
                    create table with the header row contians the info:
                    rank, logo, name, symbol, price, market cap, available supply, volume 24h
                */}
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>Available Supply</th>
                        <th>Volume 24h</th>
                        <th>Website URL</th>
                    </tr>
                </thead>
                <tbody>
                    {crypto
                        .filter((val) => {
                            return val.name.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((val, id) => {
                            return (
                                <>
                                    <tr id={id}>
                                        <td>{val.rank}</td>
                                        <td><img src={val.icon} alt={val.name} /></td>
                                        <td>{val.name}</td>
                                        <td>{val.symbol}</td>
                                        <td>{parseFloat(val.price.toFixed(2))}</td> 
                                        <td>{parseFloat(val.marketCap.toFixed(2))}</td>
                                        <td>{val.availableSupply}</td>
                                        <td>{parseFloat(val.volume.toFixed(2))}</td>
                                        <td><a href={val.websiteUrl} target="_blank" rel="noreferrer">Visit Website</a></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CurrencyTable;