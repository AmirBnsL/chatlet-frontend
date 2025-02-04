import {useQuery} from '@tanstack/react-query';


function useProfilePicture(username?: string) {
    return useQuery({
        queryKey: ['profilePicture', username],
        queryFn: async () => {
            const data = await getProfilePictureByUsername(username!);
            if (!data) throw new Error("Profile picture not found");
            return data;
        },
        enabled: !!username,
        retry: 2, // Retry twice before throwing an error
        staleTime: 1000 * 60 * 5, // Cache result for 5 minutes
    });
}
