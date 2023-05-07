import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/login/register/SignUpPage";
import { AuthProvider } from "./context/AuthContext";
import "./sass/style.scss";
import DeleteTest from "./components/myProfile/RemovePost";
import ChangePost from "./components/myProfile/EditPost";
import MyProfilePage from "./components/myProfile/MyPage";
import PostFeed from "./components/Social/FeedPage";
import DisplayPage from "./components/Social/DisplayPage";
import MyFriends from "./components/friends/FriendsPage";
import BatmanPage from "./components/friends/batman/BatmanProfile";
import PetersPage from "./components/friends/spiderman/PeterProfile";
import SupermanPage from "./components/friends/superman/SupermanProfile";
import PostDetail from "./components/Social/Posts/PostDetail";
import NavigationBar from "./components/layout/Nav";
import Comment from "./components/myProfile/CommentPost";
import CommentSuperman from "./components/friends/superman/CommentPost";
import CommentSpiderman from "./components/friends/spiderman/CommentPost";
import CommentBatman from "./components/friends/batman/CommentPost";

function App() {
	return (
		<AuthProvider>
			<Router>
			<NavigationBar/>
				<div className="container">
					<Switch>
						<Route exact ={true} path= "/">
							<LoginPage/>
						</Route>
						<Route path="/Register">
							<RegisterPage />
						</Route>
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/DisplayPost">
							<DisplayPage />
						</Route>
							<Route path="/Comment">
							<Comment />
						</Route>
						<Route path="/CommentSuperman">
							<CommentSuperman />
						</Route>
						<Route path="/CommentSpiderman">
							<CommentSpiderman />
						</Route>
						<Route path="/CommentBatman">
							<CommentBatman />
						</Route>
					
						<Route path="/PostFeed">
							<PostFeed />
						</Route>
					
						<Route path="/detail/:id">
    <PostDetail />
</Route>
						<Route path="/RemovePost">
							<DeleteTest />
						</Route>
						<Route path="/myprofile">
							<MyProfilePage />
						</Route>
						<Route path="/spiderman">
							<PetersPage/>
						</Route>
						<Route path="/Batman">
							<BatmanPage/>
						</Route>
						<Route path="/Superman">
							<SupermanPage/>
						</Route>
						<Route path="/EditPost">
							<ChangePost />
						</Route>
						<Route Path="/Friends">
							<MyFriends/>
						</Route>
					</Switch>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;