"use client"

import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner";

function LogOutButton() {
    const [loading, setLoading] = useState(false);
    
    const handleLogOut = async () => {
        setLoading(true);
       
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
       
        // Simulate random success/failure for demo
        const errorMessage = null;        
        
        if (!errorMessage) {
            // GREEN (emerald) success toast
            toast.success("Logged Out Successfully", {
                description: "You have been successfully logged out"
            });
        } else {
            // RED error toast  
            toast.error("Logout Failed", {
                description: "Something went wrong. Please try again."
            });
        }
        
        setLoading(false);
        console.log("Logging Out")
    }
    
    return (
        <Button
            className="w-24"
            variant={"outline"}
            onClick={handleLogOut}
            disabled={loading}
        >
            {loading ? <Loader2 className="animate-spin"/> : "Log Out"}
        </Button>
    )
}

export default LogOutButton
