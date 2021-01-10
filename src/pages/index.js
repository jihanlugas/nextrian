import UserLayout from "../components/UserLayout";

const Home = () => {
    return (
        <UserLayout>
            <div className="p-4">
                <div className="mb-4 text-xl">
                    <span>Dashboard</span>
                </div>
                <div>
                    <span>content</span>
                </div>
            </div>
        </UserLayout>
    )
}

export default Home;