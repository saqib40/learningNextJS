export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
  }: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
  }) {
    const isLoggedIn: boolean = false;
    return isLoggedIn ? (
        <div>
            <div>{children}</div> {/*Equivalent to complex-dashboard/@children/page.tsx hence also a slot*/}
            <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{display: "flex", flex: 1}}>{notifications}</div>
            </div>
        </div>
    ): (
      login
    );
  }