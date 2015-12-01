<?php

error_reporting(-1);
ini_set('display_errors', 'On');

header('Content-Type: application/json');
$articles = array();


/*************  home *************/

$articles['home'] = array();
$articles['home'][0]['title'] = 'We Provide Introductory Information About Investing';
$articles['home'][0]['text'] = array();
$articles['home'][0]['text'][0] = "Investing is the process of putting your money to work for you.  By placing you money into various types of investments, you allow your money to earn additional value with out any additional work by you.  There are many types of investments such as stocks, bonds, foreign exchange markets, real estate, ect.";
$articles['home'][0]['text'][1] = "This site focuses on investments that are made by purchasing commodities on an exchange or through a broker.   These investments, principally stocks and bonds, provide a relatively sound vehicle where your money can grow in value.  There are always risks with investing, and some investments are  more risky than others.  Any investment should be rigorously researched and vetted to ensure the level of risk presented by the investment is compatible with the investor's risk tolerance.";
$articles['home'][0]['image_pos'] = 'left';
$articles['home'][0]['images'] = 'nyse-sculpt-sm.jpg';
$articles['home'][1]['title'] = 'Investing Is Risky';
$articles['home'][1]['text'] = array();
$articles['home'][1]['text'][0] = "Investing in any type of asset carries some amount of risk.  Some investments, such as U.S. Government bonds have a very low degree of risk, and as such have a low interest rate for money that is invested in U.S. Government bonds. The trade off for that low risk, is a guaranteed return over the life of the bond.  Other Investments, such as stocks, can have a significant investment risk, where the principal invested can potentially be completely lost.";
$articles['home'][1]['text'][1] = "While historically this does not happen very often with investments in the stocks of larger corporations, the possibility does exist, and depending on the class of the stock, the risk can be significant. With higher risk often comes higher rewards, so the more risky investments often have a much better return over the life of the investment.";

/*************  stocks *************/

$articles['stocks'] = array();
$articles['stocks'][0]['title'] = 'What Are Stocks';
$articles['stocks'][0]['text'] = 'A stock is a unit of ownership in a corporation.  Corporations issue shares of stock for sale to raise capital that can be used to re-invest in the corporation.  Stocks can be of different classes, which have different ownership rules, such as the ability to participate in shareholders votes that can influence the direction of the corporation. Stocks are tied to the performance of the issuing company, and will rise and fall in value based on the perceived or real financial health of the issuing corporation.';
$articles['stocks'][0]['images'] = 'standard_oil_stock.jpg';
$articles['stocks'][0]['image_pos'] = 'left';

$articles['stocks'][1]['title'] = 'Exchanges';
$articles['stocks'][1]['sections'] = array();
$articles['stocks'][1]['sections'][0]['heading'] = 'What is a Stock Exchange';
$articles['stocks'][1]['sections'][0]['text'] = "A stock exchange is a venue where new shares of stock are offered for sale, and stock ownership changes hands.  The exchange acts as a market where stock brokers and traders come together to exchange shares of stock.  The exchange collects a fee from each transfer, which funds the operation of the exchange.  The exchange provides the mechanism for pricing stocks by tracking the orders for each stock, which provides the supply and demand for each stock, and thus it's price.   Stock prices rise and fall on the exchange based on the price the traders and brokers are willing to pay for the stock as shares become available for sale.";
$articles['stocks'][1]['sections'][1]['heading'] = 'New York Stock Exchange';
$articles['stocks'][1]['sections'][1]['text'] = array();
$articles['stocks'][1]['sections'][1]['text'][0] = "The New York Stock Exchange, or NYSE is the largest American stock exchange.  The NYSE has been in existence since 1792, with the Bank of New York one of the first stocks ever listed on the exchange.  Until the mid 1990s, the NYSE trading occurring primarily through verbal communication.  Trading occurs auction style, where human floor traders negotiate back and forth to complete trades for institutional investors. ";
$articles['stocks'][1]['sections'][1]['text'][1] = "In 1995, the traders began to use electronic wireless hand-held computers to execute trade between one another.  In 2007, the NYSE introduced a hybrid trading system where stock share trades can be executed via either an electronic exchange system, or via floor traders.   The NYSE has historically listed the many of the nations largest corporations that engaged in traditional business such as consumer goods manufacturing, retail sales, and financial institutions.";
$articles['stocks'][1]['sections'][2]['heading'] = 'NASDAQ';
$articles['stocks'][1]['sections'][2]['text'] = array();
$articles['stocks'][1]['sections'][2]['text'][0] = "The NASDAQ  was created in 1971 as the first all electronic U.S. based equities exchange. Since its inception, the NASDAQ has been heavy in technology based listings such as Microsoft, Apple, Oracle, Cisco, ect.  Until 1987, order were placed into the system through phone orders to traders, but after the crash of '87 the system was augmented will an electronic trade submission system to remove the dependency on a human to enter the trades into NASDAQ.  ";
$articles['stocks'][1]['sections'][2]['text'][1] = "The NASDAQ is different from the NYSE in that the NYSE is an auction market where buyers and sellers interact directly, whereas NASDAQ is a dealer market where market makers act as agents selling stocks to buyers and between one another.  Securities on NASDAQ will have multiple market makers offering the same products, which provides competition on sale price, and aides to keep trading efficient.";

$articles['stocks'][1]['images'] = array('NYSE_2015.jpg','sample-2.jpg');
$articles['stocks'][1]['image_pos'] = 'right';

$articles['stocks'][2]['title'] = 'Mutual Funds';
$articles['stocks'][2]['text'] = array();
$articles['stocks'][2]['text'][0] = "Mutual funds are financial instruments where the money from many investors is pooled together to purchase a diverse portfolio of stocks and bonds.  Mutual funds are managed by a company that directs the purchase and sale of the assets in the fund, called the fund's portfolio.  The mutual fund is then offered for sale as shares, where the investors don't directly own the assets in the fund, only a portion of the funds value through the individual shares.";
$articles['stocks'][2]['text'][1] = "Mutual funds offer a high quality investment product at a relatively low cost to the individual investor.  Mutual funds provide a diversification for the investor, at a cost of entry that would be difficult to achieve for most individuals by purchasing individual commodities.  The cost of this diversification and active management comes in fees incurred by the investor that can be significant in relation to the annual growth of the mutual fund.  ";
$articles['stocks'][2]['text'][2] = "Management fees of 1-2% per year compounds of the life of the investment and can become a significant portion of the investment over a long period of time.  For this cost, the investor gets access to financial instruments the would be difficult to access as an individual investor, and professional management of the fund that leaves little for the investor to be concerned with on a day-to-day basis.";
$articles['stocks'][2]['images'] = 'mutualfunds-paper.jpg';
$articles['stocks'][2]['image_pos'] = 'left';

$articles['stocks'][3]['title'] = 'Index Funds';
$articles['stocks'][3]['text'] = "Index funds are a type of mutual fund that closely matches an index on the market.  Index funds either own all of the same securities the index tracks, or assets in the same class, in-order to match the index as closely as possible.  Index funds have much less overhead than traditional mutual funds since the funds assets are chosen based on the index it matches, leading to significantly lower cost of ownership for the investor.  One downside of index funds is that if the index drops in value, the index fund will drop as well, with little to no intervention by the issuing company to protect the fund from losses.  Over the long term, broad market indexes generally outperform most mutual funds, thus ownership in this class of index fund can be an easy way to obtain market diversification and have a low cost , strong  performing asset in the investor's portfolio.";
$articles['stocks'][3]['images'] = 'sample-3.jpg';
$articles['stocks'][3]['image_pos'] = 'right';


/**********   bonds **************/

$articles['bonds'][0]['title'] = 'What Are Bonds';
$articles['bonds'][0]['text'] = "Bonds are a financial instrument used by many types of organizations and governments to obtains loans to finance their operations.  Bonds are certificates of debt issued for a fixed amount of time, and at the end of which the initial price of the bond + interest must be paid in full.  Bonds pay interest at a fixed rate and interval that is determined at the time of issuance.  Unlike stocks, bonds do not give the bond holder any stake in the issuing organization, but bond holders have priority over stockholders and will be paid before other debt holders when an organization enters financial troubles, such as a bankruptcy. ";
$articles['bonds'][0]['images'] = 'eaton_corp_bond.jpg';
$articles['bonds'][0]['image_pos'] = 'left';

$articles['bonds'][1]['title'] = 'Bond Trading';
$articles['bonds'][1]['text'] = "Bonds are considered a type of security, and can be traded in the same manner other securities are traded.  For the most part, government and many corporate bonds are traded between large institutions and dealer-brokers transactions where the value of single transaction is more than one hundred thousand dollars in value.  These transaction do not occur on a centralized market like most stocks.  This means that an individual must purchase bonds on the secondary market though a financial institution or a bond dealer where significant markup on the bond value could occur.  While the bond market is made up of millions of outstanding bonds, the number of available bonds for sale at any one time may only be in the tens of thousands, making accessing bonds for purchase more difficult for the smaller investor compared to stocks.";
$articles['bonds'][1]['images'] = 'us_treasury_sm.jpg';
$articles['bonds'][1]['image_pos'] = 'right';


/**********   forex **************/

$articles['forex'][0]['title'] = 'What is Forex';
$articles['forex'][0]['text'] = "Forex is the trading of one type of currency for another with the intent to make profit on the difference between the exchange rates of the currencies being traded.  Forex is considered the largest global market with an estimated value of over 3.2 trillion U.S. dollars changing hands on a daily basis.   Forex is a highly volatile, and risky market to operate in, as currencies change value constantly based on major economic indicators and geo-political developments.";
$articles['forex'][0]['images'] = 'forex_trading_small.jpg';
$articles['forex'][0]['image_pos'] = 'left';

$articles['forex'][1]['title'] = 'Forex Trading';
$articles['forex'][1]['text'] = "Foreign currencies are not traded in a centralized market, but are handled by various global financial institutions and large broker-traders.  Foreign exchange currency trading has multiple tiers of access, where each tier gets a tighter spread on the bid and ask prices, which equated to a better price on the trade.  The largest institutions trade at the top tier with the tightest spread, and smaller institutions and individual investors trade at lower tiers with higher spreads, which makes those trades more costly. ";
$articles['forex'][1]['images'] = 'forex_markets_small.jpg';
$articles['forex'][1]['image_pos'] = 'right';


/**********   strategies **************/

$articles['strategies'][0]['title'] = 'Trading Strategies';
$articles['strategies'][0]['text'] = array();
$articles['strategies'][0]['text'][0] = "There exists many ways to read and execute in the market to turn a profit.  The simplest strategy is a buy and hold, where the investor purchases well known, historically strong performing stocks, and holds them for a long period of time, trading after the stocks appreciate. This type of strategy operates on the time-frame of months to years.";
$articles['strategies'][0]['text'][1] = "Trading Strategies often fall into 2 major categories, research informed, and momentum informed.  Research based traders can may spend much of their time researching the fundamental market data behind a commodity, including historical data, corporate news, financial health reports, government data, ect.  These traders then execute trades on commodities that may be undervalued, or have a major event taking place that can effect the price.  ";
$articles['strategies'][0]['text'][2] = "Momentum traders are less concerned with the data behind the issuer of the commodity, and more about how the market is reacting at the moment around a target commodity.  These traders use short term data about how the security has performed in the market to make discussions about buy and sell positions.  Momentum traders are driven by pricing chart data that may have little bearing on the actual financial performance of the organization behind the security. ";
$articles['strategies'][0]['images'] = array('trading_strategy2.jpg', 'trading_strategy1.png');
$articles['strategies'][0]['image_pos'] = 'right';

/**********   about **************/

$articles['about-us'][0]['title'] = 'About Us';
$articles['about-us'][0]['text'] = array();
$articles['about-us'][0]['text'][0] = "StockMarketViewer.com is a web site created as a student project. The goal of this site is to provide very basic information about investing in various asset classes. This site is for educational use only and makes no guarantees or assumptions about the possible gains any investment could potentially make over time. Trading in stocks, bonds, or forex has significant risk, and the possibility exists that an investors principal can be completely lost.";
$articles['about-us'][0]['text'][1] = "The information on this site is collected form the following resources:";
$articles['about-us'][0]['list'] = array();
$articles['about-us'][0]['list'][0] = 'wikipedia.com';
$articles['about-us'][0]['list'][1] = 'wikinvest.com';
$articles['about-us'][0]['list'][2] = 'investopedia.com';
$articles['about-us'][0]['list'][3] = 'loc.gov';
$articles['about-us'][0]['list'][4] = 'business.nasdaq.com';
$articles['about-us'][0]['list'][5] = 'forbes.com';
$articles['about-us'][0]['list'][6] = 'cnn.money.com';

$articles['about-us'][1]['text'] = 'Questions about this content can be directed at:';
$articles['about-us'][1]['list'] = array();
$articles['about-us'][1]['list'][0] = 'kander23@mail.cpcc.edu';
$articles['about-us'][1]['image_pos'] = 'right';
$articles['about-us'][1]['title'] = '';

$data = array();

function indexOf(array $haystack, $needle){
    $result = (-1);
    if (is_string($needle)){
        $pos = array_search($needle, $haystack);
        if (is_numeric($pos) && $pos >=0 ){
            $result = $pos;
        }
    }
    return $result;
}

function hasString($haystack, $needle){
    $result = false;
    if (is_string($haystack) && is_string($needle)){
        $pos = strpos ( strtolower($haystack) , strtolower($needle) );
        //echo "Test: ".$pos.": ".$haystack."\n";
        if (is_numeric($pos) && $pos >=0 ){
            $result = true;
        }
    }
    return $result;
}


function article_search ($search_str, array $arr, array $paths, $current_path = ''){
    if (is_string($search_str) && strlen($search_str) > 0){
        $depth = substr_count($current_path, ".");
        $loop_cntr = 0;
        foreach ($arr as $key => $value){
            if ($loop_cntr > 0){
                // replace last path key value
                $path_arr = explode('.', $current_path);
                $path_size = count($path_arr);
                if( $path_size > 0){
                    $path_arr[($path_size-1)] = $key;
                }
                $current_path = implode('.', $path_arr);
            }
            else{
                if (strlen($current_path) > 0){
                    $current_path .= ".";
                }
                $current_path .= $key;
            }

            if (is_object($value) || is_array($value)){

                $paths =  article_search($search_str, $value, $paths, $current_path);
            }
            else if (is_string($value) && hasString($value, $search_str)){

                array_push($paths, $current_path);
            }
            $loop_cntr++;
        }
    }
    return $paths;


}


if (array_key_exists('page', $_GET) && array_key_exists($_GET['page'], $articles)){

    $data['articles']= $articles[$_GET['page']];

}
else if (array_key_exists('search', $_GET) && is_string($_GET['search']) && strlen($_GET['search']) > 0){

    // search for an article with matching text
    $data['results']= article_search($_GET['search'], $articles, array());

}
else if (array_key_exists('article', $_GET) && array_key_exists('path', $_GET) && is_string($_GET['path'])){
    if ( strlen($_GET['path']) > 0){
        // get article matching the path
        $data['result'] = array();

        $keys = explode('.', $_GET['path']);
        if (count($keys) > 0){
            $valid_path = true;
            $arr_ptr = $articles;
            $title_ref = null;
            for($i=0; $i < count($keys); $i++){
                //echo "\n".$keys[$i]."\n";
                if (!$valid_path){
                    break;
                }
                // save reference to that array reference if it includes the title key
                if(array_key_exists('title', $arr_ptr) ){
                    $title_ref = $arr_ptr;
                }
                if(array_key_exists($keys[$i], $arr_ptr) ){
                    if ( is_string($arr_ptr[( $keys[$i] )] )){
                        //echo "result: ".$arr_ptr[( $keys[$i] )];
                        // save the last reference for the article title
                        if (is_array($title_ref)){
                            $data['result'] = $title_ref;
                        }
                        else{
                            // title key not found, return the key matching the full path
                            $data['result'] = $arr_ptr[( $keys[$i] )];
                        }
                        $data['result']['path'] = $_GET['path'];
                    }
                    else{
                        $arr_ptr = $arr_ptr[($keys[$i])];
                    }
                }
                else{
                    // bad path
                    $valid_path = false;

                }
            }
        }
    }

}
else if (array_key_exists('random', $_GET)){
    // find a random article
}

echo json_encode($data);


?>