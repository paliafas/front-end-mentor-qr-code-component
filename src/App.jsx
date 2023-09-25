import QR from './components/QR';
import Attribution from './components/Attribution';

const App = () => {
    return (
        <div className="h-screen bg-light-gray">
            <div className="container mx-auto px-4">
                <div className="flex justify-center pt-24 mb-8">
                    <QR />
                </div>
                <Attribution />
            </div>
        </div>
    );
};

export default App;
