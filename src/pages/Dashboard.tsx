import AuthButton from "../components/buttons/AuthButton";
import { useLogout } from "../hooks/useLogout";
import { useProfile2 } from "../hooks/useProfile";

const Dashboard = () => {
    const { mutate } = useProfile2();
    const { mutate: logout } = useLogout();

    return (
        <div className="flex flex-col gap-10 p-[20vw]">
            <h1>Dashboard</h1>

            {/* {isLoading && <div>Loading...</div>} */}
            {/* {isError && <div>Error loading profile</div>} */}

            {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}

            <div className="w-[20vw] gap-5 flex">
                <AuthButton
                    text="Fetch MY Details"
                    clickHandler={() => mutate()}
                // disabled={!loginForm.isValid || loading}
                // isLoading={loading}
                // isLoading={isPending || loginForm.isSubmitting}
                />
                <button onClick={() => logout()} className="p-4 border ">Logout </button>
            </div>
        </div>
    );
};
export default Dashboard;
