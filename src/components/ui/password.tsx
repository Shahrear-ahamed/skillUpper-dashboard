"use client";

import { Input, InputProps } from "@/components/ui/input";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { forwardRef, useMemo, useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

// this is only password with type validation
const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => setIsVisible((prevState) => !prevState);

    const disabled =
      props.value === "" || props.value === undefined || props.disabled;

    const checkStrength = (
      pass: string
    ): Array<{ met: boolean; text: string }> => {
      const requirements = [
        { regex: /.{8,}/, text: "At least 8 characters" },
        { regex: /[0-9]/, text: "At least 1 number" },
        { regex: /[a-z]/, text: "At least 1 lowercase letter" },
        { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
      ];

      return requirements.map((req) => ({
        met: req.regex.test(pass),
        text: req.text,
      }));
    };

    const strength = checkStrength((props.value as string) || "");

    const strengthScore = useMemo(() => {
      return strength.filter((req) => req.met).length;
    }, [strength]);

    const getStrengthColor = (score: number) => {
      if (score === 0) return "bg-border";
      if (score <= 1) return "bg-red-500";
      if (score <= 2) return "bg-orange-500";
      if (score === 3) return "bg-amber-500";
      return "bg-emerald-500";
    };

    const getStrengthText = (score: number) => {
      if (score === 0) return "Enter a password";
      if (score <= 2) return "Weak password";
      if (score === 3) return "Medium password";
      return "Strong password";
    };

    return (
      <>
        {/* Password input field with toggle visibility button */}
        <div className="relative">
          <Input
            id="password"
            className={cn("hide-password-toggle pr-10 pe-9", className)}
            placeholder="Password"
            type={isVisible ? "text" : "password"}
            aria-invalid={strengthScore < 4}
            aria-describedby="password-strength"
            ref={ref}
            {...props}
          />

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={toggleVisibility}
            disabled={disabled}
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
            aria-controls="password">
            {isVisible && !disabled ? (
              <Eye className="h-4 w-4" aria-hidden="true" />
            ) : (
              <EyeOff className="h-4 w-4" aria-hidden="true" />
            )}
            <span className="sr-only">
              {isVisible ? "Hide password" : "Show password"}
            </span>
          </Button>
        </div>

        {/* Password strength indicator */}
        <div
          className="mb-4 mt-3 h-1 w-full overflow-hidden rounded-full bg-border"
          role="progressbar"
          aria-valuenow={strengthScore}
          aria-valuemin={0}
          aria-valuemax={4}
          aria-label="Password strength">
          <div
            className={`h-full ${getStrengthColor(
              strengthScore
            )} transition-all duration-500 ease-out`}
            style={{ width: `${(strengthScore / 4) * 100}%` }}></div>
        </div>

        {/* Password strength description */}
        <p
          id="password-strength"
          className="mb-2 text-sm font-medium text-foreground"
          aria-live="polite">
          {getStrengthText(strengthScore)}. Must contain:
        </p>

        {/* Password requirements list */}
        <ul className="space-y-1.5" aria-label="Password requirements">
          {strength.map((req, index) => (
            <li key={index} className="flex items-center gap-2">
              {req.met ? (
                <Check
                  size={16}
                  className="text-emerald-500"
                  aria-hidden="true"
                />
              ) : (
                <X
                  size={16}
                  className="text-muted-foreground/80"
                  aria-hidden="true"
                />
              )}
              <span
                className={`text-xs ${
                  req.met ? "text-emerald-600" : "text-muted-foreground"
                }`}>
                {req.text}
                <span className="sr-only">
                  {req.met ? " - Requirement met" : " - Requirement not met"}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  }
);

// this is only confirm password
const ConfirmPasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const disabled =
      props.value === "" || props.value === undefined || props.disabled;

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("hide-password-toggle pr-10", className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}>
          {showPassword && !disabled ? (
            <Eye className="h-4 w-4" aria-hidden="true" />
          ) : (
            <EyeOff className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
                      .hide-password-toggle::-ms-reveal,
                      .hide-password-toggle::-ms-clear {
                          visibility: hidden;
                          pointer-events: none;
                          display: none;
                      }
                  `}</style>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

ConfirmPasswordInput.displayName = "ConfirmPasswordInput";

export { PasswordInput, ConfirmPasswordInput };
