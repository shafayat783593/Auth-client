import { jwtUtils } from "@/utils/jwt"
import { cookies } from "next/headers"
import { getAccessToken } from "./getAccessToken"





export const getNewAccessToken = async () => {

    const cookiStore = await cookies()
    let accessToken = cookiStore.get("accessToken")?.value
    const refresToken = cookiStore.get("refreshToken")?.value

    let decodedAccessToken = accessToken ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string) : null
    let decodedRefreshToken = refresToken ? jwtUtils.verifyToken(refresToken, process.env.JWT_REFRESH_SECRET as string) : null



    if (!decodedAccessToken && decodedRefreshToken) {

        const result = await getAccessToken()
        if (result.success) {
            const newAccessToken = result.data.accessToken

            cookiStore.set("accessToken", newAccessToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 24,
                sameSite: "lax",
            })
            accessToken = newAccessToken;
            decodedAccessToken = accessToken ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string) : null

        }
    }
    if (!accessToken && refresToken) {
        return {
            success: false,
            message: "User not logged in"
        }
    }

    return accessToken

}