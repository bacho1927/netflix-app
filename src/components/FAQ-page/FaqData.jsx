import faqBanner from '../../img/faq-banner.png'
import faqBanner2 from '../../img/faq-banner-2.png'
import faqBanner3 from '../../img/faq-banner-3.png'
import faqBanner4 from '../../img/faq-banner-4.png'
import faqBanner5 from '../../img/faq-banner-5.png'


const FaqData = [
    {

        image: faqBanner,
        paragraph:
            <p>Netflix is a subscription-based <a href="/" className='text-red-600 hover:underline'>streaming service</a> that allows our members to watch TV shows and movies on an internet-connected device.<br></br> <br></br><a href='/' className='text-red-600 hover:underline'>Depending on your plan</a>, you can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.
                <br></br> <br></br>
                If you're already a member and would like to learn more about using Netflix,<a href="/" className='text-red-600 hover:underline'> visit Getting started with Netflix</a>.</p>

    },
    {
        title: 'TV Shows & Movies',
        image: faqBanner2,
        paragraph:
            <p>Netflix content varies by region and may change over time. You can watch a variety of <a href='/' className='text-red-600 hover:underline'> award-winning Netflix originals, TV shows, movies, documentaries, and more</a>.
                <br></br> <br></br>
                The more you watch, the better Netflix gets at <a href='/' className='text-red-600 hover:underline'>recommending </a> TV shows and movies.</p>
    },
    {
        title: 'Supported Devices',
        image: faqBanner3,
        paragraph:
            <p>You can watch Netflix through any <a href='/' className='text-red-600 hover:underline'>internet-connected device </a> that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the system requirements for web browser compatibility, and check our internet speed recommendations to achieve the best performance.</p>
    },
    {
        title: 'Plans and Pricing',
        image: faqBanner4,
        paragraph: <p>
            Each<a href='/' className='text-red-600 hover:underline'> Netflix plan </a> determines the number of devices you can watch Netflix on at the same time and whether you can watch in High Definition (HD), Full High Definition (FHD), or Ultra High Definition (UHD).
            <br></br><br></br>
            You can <a href='/' className='text-red-600 hover:underline'> change your plan </a> or <a href='/' className='text-red-600 hover:underline'> cancel</a> online at any time.
        </p>
    },
    {
        title: 'Get Started',
        image: faqBanner5,
        paragraph:
            <div>
                <p>
                    To start watching Netflix:

                </p>
                <ol className='p-4'>
                    <li>1.Visit <a href='/' className='text-red-600 hover:underline'>netflix.com/signup</a>.</li>
                    <li >2.<a href='/' className='text-red-600 hover:underline'>Choose a plan</a>.</li>
                    <li>3.Create an account by entering your email address and creating a password.</li>
                    <li>4.Enter a <a href='/' className='text-red-600 hover:underline'>payment method</a>.</li>
                </ol>
                <p>As a Netflix member, you are charged once a month on the date you signed up. </p>
            </div>
    }
];

export default FaqData;

