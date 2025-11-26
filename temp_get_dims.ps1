Add-Type -AssemblyName System.Drawing
 = [System.Drawing.Image]::FromFile('public/Owned-Badge.png')
Write-Host .Width
Write-Host .Height
