"use client";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserProfile = ({ params }) => {
	const [profilePosts, setProfilePosts] = useState([]);
	const searchParams = useSearchParams();
	const userName = searchParams.get("name");

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/users/${params.id}/posts`);
			const data = await response.json();

			setProfilePosts(data);
		};

		if (params.id) fetchPosts();
	}, [params.id]);

	return (
		<Profile
			name={userName}
			desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
			data={profilePosts}
		/>
	);
};

export default UserProfile;
